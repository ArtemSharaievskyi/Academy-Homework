import React, { useState } from "react";

function ControlledForm() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    age: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">Реєстрація</h2>

      <label className="block">
        Ім’я:
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="input"
        />
      </label>

      <label className="block">
        Пароль:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="input"
        />
      </label>

      <label className="block">
        Повторіть пароль:
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="input"
        />
      </label>

      <label className="block">
        Дата народження:
        <input
          type="date"
          name="birthDate"
          value={form.birthDate}
          onChange={handleChange}
          className="input"
        />
      </label>

      <label className="block">
        Стать:
        <select name="gender" value={form.gender} onChange={handleChange} className="input">
          <option value="">Оберіть</option>
          <option value="male">Чоловіча</option>
          <option value="female">Жіноча</option>
        </select>
      </label>

      <label className="block">
        Вік:
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          className="input"
        />
      </label>

      <label className="block">
        Опис:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="input"
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Надіслати
      </button>
    </form>
  );
}

export default ControlledForm;
