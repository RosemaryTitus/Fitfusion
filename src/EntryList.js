const EntryList = [
    {
      id: 1,
      emoji: "data:image/jpeg;base64,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",
      name: "Strength Training",
      meaning:
        "These exercises focus on building muscle strength and endurance. Examples include: Weightlifting, Bodyweight exercises, Resistance band exercises, Pilates"
    },
    {
      id: 2,
      emoji: "data:image/jpeg;base64,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",
      name: "Cardiovascular or Aerobic ",
      meaning:
        "These exercises increase your heart rate and improve cardiovascular health. Examples include: Running, Swimming, Dancing, Walking, Jumping Ropes"
    },
    {
      id: 3,
      emoji: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0J8Zt41C2MUAsDZphc6pyLICN-CAEmlH8nw&s",
      name: "Balance and Stability",
      meaning:"These exercises help improve balance, coordination, and stability. Examples include: Stability ball exercises, Balance exercises, Pilates, Yoga"
    },
    {
        id: 4,
        emoji: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ-IELCwRHYGpKgJ2U5q4IaYLXfubQ0xNVA&s",
        name: "High-Intensity Interval Training",
        meaning:"HIIT involves short bursts of intense exercise followed by brief rest periods. It helps improve cardiovascular fitness and burn calories efficiently."
      }
  ];
  
  export default EntryList;