const API_BASE_URL = "http://localhost:5000/api";

const fetchDrugStores = async (page = 1, pageSize = 20) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/drug-stores/?page=${page}&pageSize=${pageSize}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении списка аптек:", error);
    throw error;
  }
};

const fetchMedicines = async (id, page = 1, pageSize = 20) => {
  console.log("id: ", id);
  try {
    const response = await fetch(
      `${API_BASE_URL}/drug-stores/${id}/medicines?page=${page}&pageSize=${pageSize}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении списка Лекарств:", error);
    throw error;
  }
};

const addToCart = async (medicineId, quantity, storeId) => {
  console.log("storeId: ", storeId);
  console.log("quantity: ", quantity);
  console.log("medicineId: ", medicineId);
  const url = "http://localhost:5000/api/stores/cart"; // Замените на актуальный URL
  const body = {
    medicineId,
    quantity: Number(quantity),
    storeId,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const result = await response.text(); // или response.json(), если API возвращает JSON
      return result; // Возвращаем результат
    } else {
      throw new Error("Ошибка при добавлении товара в корзину");
    }
  } catch (error) {
    console.error("Ошибка при добавлении товара в корзину:", error);
    throw error;
  }
};

export { fetchDrugStores, fetchMedicines, addToCart };
