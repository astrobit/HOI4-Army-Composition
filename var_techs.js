
var techs = new Array();// = [];
techs.push(new tech(1918, "Infantry Technology", "Support Weapons", "Support Weapons I", null));
techs.push(new tech(1938, "Infantry Technology", "Support Weapons", "Support Weapons II", "Support Weapons I"));
techs.push(new tech(1940, "Infantry Technology", "Support Weapons", "Support Weapons III", "Support Weapons II"));
techs.push(new tech(1942, "Infantry Technology", "Support Weapons", "Support Weapons IV", "Support Weapons III"));

techs.push(new tech(1918, "Infantry Technology", "Infantry Equipment", "Basic Infantry Equipment", null));
techs.push(new tech(1936, "Infantry Technology", "Infantry Equipment", "Infantry Equipment I", techs[techs.length - 1].name));
techs.push(new tech(1938, "Infantry Technology", "Infantry Equipment", "Improved Infantry Equipment I", techs[techs.length - 1].name));
techs.push(new tech(1939, "Infantry Technology", "Infantry Equipment", "Infantry Equipment II", techs[techs.length - 1].name));
techs.push(new tech(1940, "Infantry Technology", "Infantry Equipment", "Improved Infantry Equipment II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Infantry Technology", "Infantry Equipment", "Infantry Equipment III", techs[techs.length - 1].name));
techs.push(new tech(1944, "Infantry Technology", "Infantry Equipment", "Improved Infantry Equipment III", techs[techs.length - 1].name));

techs.push(new tech(1942, "Infantry Technology", "Infantry Anti-Tank", "Infantry Anti-Tank I", "Infantry Equipment II"));
techs.push(new tech(1943, "Infantry Technology", "Infantry Anti-Tank", "Infantry Anti-Tank II", techs[techs.length - 1].name));

techs.push(new tech(1943, "Infantry Technology", "Night Vision", "Night Vision I", null));
techs.push(new tech(1946, "Infantry Technology", "Night Vision", "Night Vision II", techs[techs.length - 1].name));

techs.push(new tech(1936, "Infantry Technology", "Motorized", "Motorized", null));
techs.push(new tech(1940, "Infantry Technology", "Motorized", "Mechanized I", techs[techs.length - 1].name));
techs.push(new tech(1942, "Infantry Technology", "Motorized", "Mechanized II", techs[techs.length - 1].name));
techs.push(new tech(1944, "Infantry Technology", "Motorized", "Mechanized III", techs[techs.length - 1].name));

techs.push(new tech(1941, "Infantry Technology", "Amtrac", "Basic Amtrac", "Mechanized II"));
techs.push(new tech(1943, "Infantry Technology", "Amtrac", "Improved Amtrac", techs[techs.length - 1].name));

techs.push(new tech(1936, "Infantry Technology", "Armored Car", "Interwar Armored Car", "Motorized"));
techs.push(new tech(1940, "Infantry Technology", "Armored Car", "Basic Armored Car", techs[techs.length - 1].name));
techs.push(new tech(1942, "Infantry Technology", "Armored Car", "Improved Armored Car", techs[techs.length - 1].name));
techs.push(new tech(1942, "Infantry Technology", "Armored Car", "Anti-Tank Armored Car", techs[techs.length - 1].name));

techs.push(new tech(1936, "Infantry Technology", "Marines", "Marines I", null));
techs.push(new tech(1939, "Infantry Technology", "Marines", "Marines II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Infantry Technology", "Marines", "Marines III", techs[techs.length - 1].name));

techs.push(new tech(1936, "Infantry Technology", "Paratroopers", "Paratroopers I", null));
techs.push(new tech(1939, "Infantry Technology", "Paratroopers", "Paratroopers II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Infantry Technology", "Paratroopers", "Paratroopers III", techs[techs.length - 1].name));

techs.push(new tech(1936, "Infantry Technology", "Mountain Infantry", "Mountain Infantry I", null));
techs.push(new tech(1939, "Infantry Technology", "Mountain Infantry", "Mountain Infantry II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Infantry Technology", "Mountain Infantry", "Mountain Infantry III", techs[techs.length - 1].name));

techs.push(new tech(1938, "Infantry Technology", "Special Forces", "Special Forces", null));
techs.push(new tech(1940, "Infantry Technology", "Special Forces", "Special Forces Training", techs[techs.length - 1].name));
techs.push(new tech(1942, "Infantry Technology", "Special Forces", "Extreme Environment Training", techs[techs.length - 1].name));
techs.push(new tech(1944, "Infantry Technology", "Special Forces", "Elite Forces", "Special Forces"));

techs.push(new tech(1940, "Infantry Technology", "Special Forces B", "Expanded Special Forces Program", "Special Forces"));
techs.push(new tech(1942, "Infantry Technology", "Special Forces B", "Survival Training", techs[techs.length - 1].name));

techs.push(new tech(1918, "Armor Technology", "Tanks", "Great War Tank", null))

techs.push(new tech(1934, "Armor Technology", "Light Tanks", "Light Tank I", techs[techs.length - 1].name));
techs.push(new tech(1936, "Armor Technology", "Light Tanks", "Light Tank II", techs[techs.length - 1].name));
techs.push(new tech(1941, "Armor Technology", "Light Tanks", "Light Tank III", techs[techs.length - 1].name));

techs.push(new tech(1939, "Armor Technology", "Medium Tanks", "Medium Tank I", "Light Tank II"));
techs.push(new tech(1941, "Armor Technology", "Medium Tanks", "Medium Tank II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Armor Technology", "Medium Tanks", "Medium Tank III", techs[techs.length - 1].name));

techs.push(new tech(1934, "Armor Technology", "Heavy Tanks", "Heavy Tank I", "Great War Tank"));
techs.push(new tech(1941, "Armor Technology", "Heavy Tanks", "Heavy Tank II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Armor Technology", "Heavy Tanks", "Heavy Tank III", techs[techs.length - 1].name));

techs.push(new tech(1943, "Armor Technology", "Super-Heavy Tanks", "Super-Heavy Tank", "Heavy Tank II"));

techs.push(new tech(1945, "Armor Technology", "Modern Tanks", "Modern Tank", "Medium Tank III")); // can also be heavy tank III - need to figure this out

techs.push(new tech(1940, "Armor Technology", "Amphibious Tanks", "Amphibious Tank I", "Light Tank II"));
techs.push(new tech(1942, "Armor Technology", "Amphibious Tanks", "Amphibious Tank II", techs[techs.length - 1].name));

techs.push(new tech(1934, "Artillery Technology", "Artillery", "Artillery I", null));
techs.push(new tech(1936, "Artillery Technology", "Artillery", "Interwar Artillery", techs[techs.length - 1].name));
techs.push(new tech(1939, "Artillery Technology", "Artillery", "Artillery II", techs[techs.length - 1].name));
techs.push(new tech(1940, "Artillery Technology", "Artillery", "Improved Artillery Upgrade I", techs[techs.length - 1].name));
techs.push(new tech(1941, "Artillery Technology", "Artillery", "Improved Artillery Upgrade II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Artillery Technology", "Artillery", "Artillery III", techs[techs.length - 1].name));
techs.push(new tech(1943, "Artillery Technology", "Artillery", "Advanced Artillery Upgrade", techs[techs.length - 1].name));

techs.push(new tech(1936, "Artillery Technology", "Anti-Air", "Anti-Air I", "Artillery I"));
techs.push(new tech(1939, "Artillery Technology", "Anti-Air", "Anti-Air Upgrade", techs[techs.length - 1].name));
techs.push(new tech(1940, "Artillery Technology", "Anti-Air", "Anti-Air II", techs[techs.length - 1].name));
techs.push(new tech(1941, "Artillery Technology", "Anti-Air", "Improved Anti-Air Upgrade I", techs[techs.length - 1].name));
techs.push(new tech(1942, "Artillery Technology", "Anti-Air", "Improved Anti-Air Upgrade II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Artillery Technology", "Anti-Air", "Anti-Air III", techs[techs.length - 1].name));

techs.push(new tech(1936, "Artillery Technology", "Anti-Tank", "Anti-Tank I", "Artillery I"));
techs.push(new tech(1939, "Artillery Technology", "Anti-Tank", "Anti-Tank Upgrade", techs[techs.length - 1].name));
techs.push(new tech(1940, "Artillery Technology", "Anti-Tank", "Anti-Tank II", techs[techs.length - 1].name));
techs.push(new tech(1941, "Artillery Technology", "Anti-Tank", "Improved Anti-Tank Upgrade I", techs[techs.length - 1].name));
techs.push(new tech(1942, "Artillery Technology", "Anti-Tank", "Improved Anti-Tank Upgrade II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Artillery Technology", "Anti-Tank", "Anti-Tank III", techs[techs.length - 1].name));

techs.push(new tech(1940, "Artillery Technology", "Rocket Artillery", "Rocket Artillery", "Artillery I"));
techs.push(new tech(1941, "Artillery Technology", "Rocket Artillery", "Rocket Artillery Upgrade I", techs[techs.length - 1].name));
techs.push(new tech(1942, "Artillery Technology", "Rocket Artillery", "Rocket Artillery Upgrade II", techs[techs.length - 1].name));
techs.push(new tech(1943, "Artillery Technology", "Rocket Artillery", "Advanced Rocket Artillery", techs[techs.length - 1].name));

techs.push(new tech(1936, "Support Technology", "Engineer Company", "Engineer Company I", null));
techs.push(new tech(1939, "Support Technology", "Engineer Company", "Engineer Company II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Support Technology", "Engineer Company", "Engineer Company III", techs[techs.length - 1].name));
techs.push(new tech(1945, "Support Technology", "Engineer Company", "Engineer Company IV", techs[techs.length - 1].name));

techs.push(new tech(1936, "Support Technology", "Recon Company", "Recon Company I", null));
techs.push(new tech(1939, "Support Technology", "Recon Company", "Recon Company II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Support Technology", "Recon Company", "Recon Company III", techs[techs.length - 1].name));
techs.push(new tech(1945, "Support Technology", "Recon Company", "Recon Company IV", techs[techs.length - 1].name));

techs.push(new tech(1936, "Support Technology", "Military Police", "Military Police I", null));
techs.push(new tech(1939, "Support Technology", "Military Police", "Military Police II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Support Technology", "Military Police", "Military Police III", techs[techs.length - 1].name));
techs.push(new tech(1945, "Support Technology", "Military Police", "Military Police IV", techs[techs.length - 1].name));

techs.push(new tech(1936, "Support Technology", "Maintenance Company", "Maintenance Company I", null));
techs.push(new tech(1939, "Support Technology", "Maintenance Company", "Maintenance Company II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Support Technology", "Maintenance Company", "Maintenance Company III", techs[techs.length - 1].name));
techs.push(new tech(1945, "Support Technology", "Maintenance Company", "Maintenance Company IV", techs[techs.length - 1].name));

techs.push(new tech(1936, "Support Technology", "Field Hospital", "Field Hospital I", "Motorized"));
techs.push(new tech(1939, "Support Technology", "Field Hospital", "Field Hospital II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Support Technology", "Field Hospital", "Field Hospital III", techs[techs.length - 1].name));
techs.push(new tech(1945, "Support Technology", "Field Hospital", "Field Hospital IV", techs[techs.length - 1].name));

techs.push(new tech(1936, "Support Technology", "Logistics Company", "Logistics Company I", "Motorized"));
techs.push(new tech(1939, "Support Technology", "Logistics Company", "Logistics Company II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Support Technology", "Logistics Company", "Logistics Company III", techs[techs.length - 1].name));
techs.push(new tech(1945, "Support Technology", "Logistics Company", "Logistics Company IV", techs[techs.length - 1].name));

techs.push(new tech(1936, "Support Technology", "Signal Company", "Signal Company I", "Motorized"));
techs.push(new tech(1939, "Support Technology", "Signal Company", "Signal Company II", techs[techs.length - 1].name));
techs.push(new tech(1942, "Support Technology", "Signal Company", "Signal Company III", techs[techs.length - 1].name));
techs.push(new tech(1945, "Support Technology", "Signal Company", "Signal Company IV", techs[techs.length - 1].name));

