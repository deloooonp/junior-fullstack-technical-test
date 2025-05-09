const fruits = [
  { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
  { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
  { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
  { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
  { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
  { fruitId: 5, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
  { fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];

// 1. Semua nama buah
const allFruitNames = fruits.map((fruit) => fruit.fruitName);
console.log("1. Semua nama buah:", allFruitNames);

// 2. Jumlah wadah berdasarkan fruitType dan isinya
const wadah = {};
fruits.forEach((fruit) => {
  if (!wadah[fruit.fruitType]) {
    wadah[fruit.fruitType] = [];
  }
  wadah[fruit.fruitType].push(fruit.fruitName);
});
console.log("2. Wadah berdasarkan tipe buah:", wadah);
console.log("Jumlah wadah:", Object.keys(wadah).length);

// 3. Total stok buah per wadah
const totalStock = {};
fruits.forEach((fruit) => {
  if (!totalStock[fruit.fruitType]) {
    totalStock[fruit.fruitType] = 0;
  }
  totalStock[fruit.fruitType] += fruit.stock;
});
console.log("3. Total stok per tipe buah:", totalStock);

// 4. Komentar terhadap data
console.log("4. Komentar:");
console.log("- Ada ID buah yang duplikat (fruitId: 5) dengan nama berbeda.");
console.log(
  "- Nama buah tidak konsisten (contoh: 'Apel' vs 'apel', 'Kurma' vs 'KURMA')."
);
