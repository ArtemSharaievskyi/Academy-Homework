import React, { useRef } from "react";

function UncontrolledFilterForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const formObj = Object.fromEntries(data.entries());
    console.log(formObj);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">Фільтр товарів</h2>

      <label className="block">
        Тип продукту:
        <select name="type" className="input">
          <option value="phone">Телефон</option>
          <option value="laptop">Ноутбук</option>
          <option value="vacuum">Пилосос</option>
          <option value="charger">Зарядка</option>
        </select>
      </label>

      <fieldset className="space-y-2">
        <legend>Потужність:</legend>
        {["15w", "25w", "65w", "100w", "200w"].map((w) => (
          <label key={w} className="block">
            <input type="checkbox" name="power" value={w} /> {w}
          </label>
        ))}
      </fieldset>

      <fieldset className="space-y-2">
        <legend>Марка:</legend>
        {["Samsung", "LG", "Asus", "Lenovo"].map((brand) => (
          <label key={brand} className="block">
            <input type="checkbox" name="brand" value={brand.toLowerCase()} /> {brand}
          </label>
        ))}
      </fieldset>

      <fieldset className="space-y-2">
        <legend>Сортування:</legend>
        {["cheap", "expensive", "rating"].map((sort) => (
          <label key={sort} className="block">
            <input type="radio" name="sort" value={sort} /> {sort}
          </label>
        ))}
      </fieldset>

      <label className="block">
        Назва моделі:
        <input type="text" name="modelName" className="input" />
      </label>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Фільтрувати
      </button>
    </form>
  );
}

export default UncontrolledFilterForm;
