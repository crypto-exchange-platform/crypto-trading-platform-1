import { FC, ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface SignupModalProps {
  onClose: () => void;
  onSignupSuccess: () => void;
}

export const SignupModal: FC<SignupModalProps> = ({ onClose, onSignupSuccess }) => {
  const { t } = useTranslation();
  const [countries, setCountries] = useState<any[]>([]);
  const [dialCodes, setDialCodes] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    birthdate: "",
    country: "",
    language: "",
    dialCode: "",
    password: "",
  });

  useEffect(() => {
    fetch("https://api.salesvault.vc/api/countries")
      .then((res) => res.json())
      .then(setCountries);
    fetch("https://api.salesvault.vc/api/countries/dial-codes")
      .then((res) => res.json())
      .then(setDialCodes);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (pass: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/.test(pass);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const required = ["firstName", "lastName", "username", "email", "password"];
    for (const f of required) {
      if (!form[f as keyof typeof form]) {
        setError(t("signup.errors.required"));
        return;
      }
    }
    if (!isValidEmail(form.email)) {
      setError(t("signup.errors.invalidEmail"));
      return;
    }
    if (!isStrongPassword(form.password)) {
      setError(t("signup.errors.weakPassword"));
      return;
    }
    const isoDOB =
      form.birthdate
        ? new Date(form.birthdate).toISOString().split("T")[0]
        : null;
    try {
      await axios.post(
        "https://api.salesvault.vc/identity/api/clients/create-client-via-web",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username,
          email: form.email,
          password: form.password,
          telephone: form.dialCode + form.phone,
          country: form.country || null,
          language: form.language || null,
          dateOfBirth: isoDOB,
          source:
            window.location.hostname === "localhost"
              ? "cryptotrade.salesvault.vc"
              : window.location.hostname,
        }
      );
      onClose();           
      onSignupSuccess();   
    } catch (err: any) {
      setError(err.response?.data?.message || t("signup.errors.failed"));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto">
      <div className="bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#0a1f1c] text-black w-full max-w-xl p-6 rounded-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl cursor-pointer"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {t("signup.title")}
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {[
            { name: "firstName", placeholder: t("signup.fields.firstName") },
            { name: "lastName", placeholder: t("signup.fields.lastName") },
            { name: "username", placeholder: t("signup.fields.username") },
            { name: "email", placeholder: t("signup.fields.email"), type: "email" },
            { name: "phone", placeholder: t("signup.fields.phone"), type: "tel" },
            { name: "birthdate", placeholder: "", type: "date" },
            {
              name: "password",
              placeholder: t("signup.fields.password"),
              type: "password",
              full: true,
            },
            { name: "language", placeholder: t("signup.fields.language") },
          ].map(({ name, placeholder, type = "text", full }) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              className={`border p-2 rounded bg-white text-black ${
                full ? "col-span-full" : ""
              }`}
              onChange={handleChange}
            />
          ))}
          <select
            name="dialCode"
            className="border p-2 rounded cursor-pointer bg-white text-black"
            onChange={handleChange}
          >
            <option value="">{t("signup.fields.dialCode")}</option>
            {dialCodes.map((d: any) => (
              <option key={d.code} value={d.dial_code}>
                {d.dial_code}
              </option>
            ))}
          </select>
          <select
            name="country"
            className="border p-2 rounded w-full col-span-full cursor-pointer bg-white text-black"
            onChange={handleChange}
          >
            <option value="">{t("signup.fields.country")}</option>
            {countries.map((c: any) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {error && (
            <div className="text-red-500 text-sm col-span-full">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded col-span-full hover:bg-gray-900 cursor-pointer"
          >
            {t("signup.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};
 