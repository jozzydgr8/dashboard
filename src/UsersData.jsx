export const normalUserAcquisitions = [
  { date: "2024-08-01", newUsers: 20, totalUsers: 1280 },
  { date: "2024-08-15", newUsers: 30, totalUsers: 1310 },
  { date: "2024-09-01", newUsers: 40, totalUsers: 1350 },
  { date: "2024-09-10", newUsers: 50, totalUsers: 1400 },
  { date: "2024-09-20", newUsers: 60, totalUsers: 1460 },
  { date: "2024-10-01", newUsers: 30, totalUsers: 1490 },
  { date: "2024-10-10", newUsers: 40, totalUsers: 1530 },
  { date: "2024-10-20", newUsers: 50, totalUsers: 1580 },
  { date: "2024-10-25", newUsers: 60, totalUsers: 1640 },
  { date: "2024-10-28", newUsers: 50, totalUsers: 1690 },
  { date: "2024-11-01", newUsers: 70, totalUsers: 1760 },
  { date: "2024-11-03", newUsers: 30, totalUsers: 1790 },
  { date: "2024-11-05", newUsers: 40, totalUsers: 1830 },
  { date: "2024-11-07", newUsers: 50, totalUsers: 1880 },
  { date: "2024-11-09", newUsers: 60, totalUsers: 1940 },
  { date: "2024-11-11", newUsers: 70, totalUsers: 2010 },
  { date: "2024-11-12", newUsers: 50, totalUsers: 2060 },
  { date: "2024-11-14", newUsers: 40, totalUsers: 2100 },
  { date: "2024-11-16", newUsers: 60, totalUsers: 2160 },
  { date: "2024-11-18", newUsers: 70, totalUsers: 2230 },
  { date: "2024-11-19", newUsers: 80, totalUsers: 2310 },
  { date: "2024-11-20", newUsers: 90, totalUsers: 2400 },
  // Additional past dates filled in
  { date: "2024-07-01", newUsers: 30, totalUsers: 1230 },
  { date: "2024-07-15", newUsers: 20, totalUsers: 1250 },
  { date: "2024-06-01", newUsers: 50, totalUsers: 1200 },
  { date: "2024-05-01", newUsers: 60, totalUsers: 1140 },
  { date: "2024-05-15", newUsers: 40, totalUsers: 1180 },
  { date: "2024-04-01", newUsers: 70, totalUsers: 1070 },
  { date: "2024-04-15", newUsers: 60, totalUsers: 1130 },
  { date: "2024-03-01", newUsers: 50, totalUsers: 980 },
  { date: "2024-03-15", newUsers: 40, totalUsers: 1020 },
  { date: "2024-02-01", newUsers: 30, totalUsers: 900 },
  { date: "2024-02-15", newUsers: 50, totalUsers: 950 },
  { date: "2024-01-01", newUsers: 40, totalUsers: 860 },
  { date: "2024-01-15", newUsers: 70, totalUsers: 930 },
  { date: "2023-12-01", newUsers: 80, totalUsers: 790 },
  { date: "2023-12-15", newUsers: 50, totalUsers: 840 },
  { date: "2023-11-01", newUsers: 60, totalUsers: 730 },
  { date: "2023-11-15", newUsers: 70, totalUsers: 800 },
  { date: "2023-10-01", newUsers: 50, totalUsers: 680 },
  { date: "2023-10-15", newUsers: 40, totalUsers: 720 },
  { date: "2023-09-01", newUsers: 60, totalUsers: 620 },
  { date: "2023-09-15", newUsers: 50, totalUsers: 670 },
];


  export const merchantData = [
    {
        merchantId: "M001",
        name: "Great Eats",
        joinDate: "2023-10-25",
        transactions: 120,
        engagementLevel: "High",
    },
    {
        merchantId: "M002",
        name: "Quick Mart",
        joinDate: "2023-11-02",
        transactions: 45,
        engagementLevel: "Medium",
    },
    {
        merchantId: "M003",
        name: "Budget Bites",
        joinDate: "2023-11-10",
        transactions: 80,
        engagementLevel: "High",
    },
    {
        merchantId: "M004",
        name: "Daily Groceries",
        joinDate: "2023-11-18",
        transactions: 35,
        engagementLevel: "Low",
    },
    {
        merchantId: "M005",
        name: "Fitness Fuel",
        joinDate: "2023-11-20",
        transactions: 110,
        engagementLevel: "High",
    },
    {
        merchantId: "M006",
        name: "Urban Tastes",
        joinDate: "2023-11-25",
        transactions: 95,
        engagementLevel: "Medium",
    },
    {
        merchantId: "M007",
        name: "Home Supplies",
        joinDate: "2023-12-01",
        transactions: 50,
        engagementLevel: "Medium",
    },
    {
        merchantId: "M008",
        name: "Vegan Delights",
        joinDate: "2023-12-10",
        transactions: 72,
        engagementLevel: "High",
    },
    {
        merchantId: "M009",
        name: "Fast Snacks",
        joinDate: "2023-12-15",
        transactions: 30,
        engagementLevel: "Low",
    },
    {
        merchantId: "M010",
        name: "Bakery Bliss",
        joinDate: "2023-12-20",
        transactions: 125,
        engagementLevel: "High",
    },
];

// Additional 40 entries
for (let i = 11; i <= 30; i++) {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const joinYear = "2024";
    const joinMonth = months[Math.floor((i - 11) / 8)];
    const joinDay = (i % 28) + 1; // Ensures day does not exceed 28
    const transactions = Math.floor(Math.random() * 200); // Random transactions between 0-199
    const engagementLevels = ["High", "Medium", "Low"];
    const engagementLevel = engagementLevels[Math.floor(Math.random() * engagementLevels.length)];

    merchantData.push({
        merchantId: `M${i.toString().padStart(3, "0")}`,
        name: `Merchant ${i}`,
        joinDate: `${joinYear}-${joinMonth}-${joinDay.toString().padStart(2, "0")}`,
        transactions: transactions,
        engagementLevel: engagementLevel,
    });
}



  export const transactionVolume = [
    
      {
        date: "Jan 2024",
        transactions: 120,
      },
      {
        date: "Feb 2024",
        transactions: 180,
      },
      {
        date: "Mar 2024",
        transactions: 140,
      },
      {
        date: "Apr 2024",
        transactions: 200,
      },
      {
        date: "May 2024",
        transactions: 160,
      },
      {
        date: "Jun 2024",
        transactions: 220,
      },
      {
        date: "Jul 2024",
        transactions: 190,
      },
      {
        date: "Aug 2024",
        transactions: 150,
      },
      {
        date: "Sep 2024",
        transactions: 300,
      },
      {
        date: "Oct 2024",
        transactions: 200,
      },
      {
        date: "Nov 2024",
        transactions: 250,
      },
      {
        date: "Dec 2024",
        transactions: 280,
      },
    
    

  ];
  
  
  