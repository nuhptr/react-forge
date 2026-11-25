import { useId, useState, type SubmitEvent } from "react";

import { useFormInput } from "../hooks/use-form-input";

/**
 * Challenge 2 Custom Hooks: form pendaftaran ringkas menggunakan custom hook `useFormInput`.
 *
 * @returns Kartu form input nama dan email.
 */
const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const fullNameInput = useFormInput("");
  const emailInput = useFormInput("");
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fullNameInput.value.trim() || !emailInput.value.trim()) return;

    setSubmittedSummary(
      `${fullNameInput.value.trim()} (${emailInput.value.trim()})`,
    );
    fullNameInput.reset();
    emailInput.reset();
  };

  return (
    <div className="card">
      <h2>2. useFormInput Hook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameFieldId}>Nama:</label>
        <input
          id={nameFieldId}
          type="text"
          value={fullNameInput.value}
          onChange={fullNameInput.onChange}
          placeholder="Nama lengkap"
        />

        <label htmlFor={emailFieldId}>Email:</label>
        <input
          id={emailFieldId}
          type="email"
          value={emailInput.value}
          onChange={emailInput.onChange}
          placeholder="nama@domain.com"
        />

        <button type="submit">Kirim</button>
      </form>

      {submittedSummary && <p role="status">Terkirim: {submittedSummary}</p>}
    </div>
  );
};

export default RegistrationForm;
