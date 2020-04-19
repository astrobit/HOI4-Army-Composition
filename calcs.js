	// Script for controlling the tabs.
	function selectTab(evt, tabName) {
		// Declare all variables
		var i, tabcontent, tablinks;

		// Get all elements with class="tabcontent" and hide them
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		// Get all elements with class="tablinks" and remove the class "active"
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(tabName).style.display = "block";
		if (evt != null)
		{
			evt.currentTarget.className += " active";
		}
	}
	class tech
	{
		constructor(year, mastergroup,group, name, prereq)
		{
			this._year = year;
			this._name = name;
			this._group = group;
			this._prereq = prereq;
			this._mastergroup = mastergroup;
		}
		get name() { return this._name;}
		get year() { return this._year;}
		get prereq() { return this._prereq;}
		get group() { return this._group;}
		get mastergroup() { return this._mastergroup;}
		
	}
	class equipment
	{
		constructor(name,type, enabled_by, soft_attack,hard_attack,defense,breakthrough,armor,piercing,hardness,speed,production_cost,reliability)
		{
			this._name = name;
			this._type = type;
			this._enabled_by = enabled_by;
			if (soft_attack == null)
				this._soft_attack = -1;
			else
				this._soft_attack = soft_attack;
			if (hard_attack == null)
				this._hard_attack = -1;
			else
				this._hard_attack = hard_attack;
			if (defense == null)
				this._defense = -1;
			else
				this._defense = defense;
			if (breakthrough == null)
				this._breakthrough = -1;
			else
				this._breakthrough = breakthrough;
			if (armor == null)
				this._armor = -1;
			else
				this._armor = armor;
			if (piercing == null)
				this._piercing = -1;
			else
				this._piercing = piercing;
			if (hardness == null)
				this._hardness = -1;
			else
				this._hardness;
			if (speed == null)
				this._speed = -1;
			else
				this._speed = speed;
			if (production_cost == null)
				this._production_cost = -1;
			else
				this._production_cost = production_cost;
			if (reliability == null)
				this._reliability = -1;
			else
				this._reliability;
		}
		get name(){ return this._name;}
		get soft_attack(){ return this._soft_attack;}
		get hard_attack(){ return this._hard_attack;}
		get defense(){ return this._defense;}
		get breakthrough(){ return this._breakthrough;}
		get armor(){ return this._armor;}
		get piercing(){ return this._piercing;}
		get hardness(){ return this._hardness;}
		get speed(){ return this._speed;}
		get production_cost(){ return this._production_cost;}
		get reliability(){ return this._reliability;}

		set name(value){ this._name = value;}
		set soft_attack(value){ this._soft_attack = value;}
		set hard_attack(value){ this._hard_attack = value;}
		set defense(value){ this._defense = value;}
		set breakthrough(value){ this._breakthrough = value;}
		set armor(value){ this._armor = value;}
		set piercing(value){ this._piercing = value;}
		set hardness(value){ this._hardness = value;}
		set speed(value){ this._speed = value;}
		set production_cost(value){ this._production_cost = value;}
		set reliability(value){ this._reliability = value;}
	}
	var equipments = [];
	equipments.push(new equipment("Basic Infantry Equipment","Infantry", "Basic Infantry Equipment", 3,0.5,20,2,-1,1,-1,-1,0.43,90));
	equipments.push(new equipment("Infantry Equipment I","Infantry", "Infantry Equipment I",6,1,22,3,-1,4,-1,-1,0.50,90));
	equipments.push(new equipment("Infantry Equipment II","Infantry", "Infantry Equipment II",9,1.5,28,4,-1,5,-1,-1,0.58,90));
	equipments.push(new equipment("Infantry Equipment III","Infantry", "Infantry Equipment III",12,2.0,34,5,-1,10,-1,-1,0.69,80));
	equipments.push(new equipment("Motorized","Motorized","Motorized",-1,-1,-1,-1,-1,-1,10,12,2.5,80));
	equipments.push(new equipment("Mechanized I","Mechanized","Mechanized I",-1,-1,26,4,10,11,60,8,8,80));
	equipments.push(new equipment("Mechanized II","Mechanized","Mechanized II",-1,-1,30,5,15,16,70,10,10,80));
	equipments.push(new equipment("Mechanized III","Mechanized","Mechanized III",-1,-1,34,6,20,21,80,10,12,80));
	equipments.push(new equipment("Basic Amtrac","Amtrac","Basic Amtrac",-1,-1,26,4,10,11,60,7,8,80));
	equipments.push(new equipment("Improved Amtrac","Amtrac","Improved Amtrac",-1,-1,30,5,15,16,70,10,10,80));
	equipments.push(new equipment("Interwar Armored Car","Armored Car","Interwar Armored Car",6,2,2,12,3,6,65,9,4,80));
	equipments.push(new equipment("Basic Armored Car","Armored Car","Basic Armored Car",13,4,3,16,10,8,65,12,6,80));
	equipments.push(new equipment("Improved Armored Car","Armored Car","Improved Armored Car",16,8,5,28,20,36,70,15,8,80));
	equipments.push(new equipment("Anti-Tank Armored Car","Armored Car","Anti-Tank Armored Car",12,14,6,28,20,62,70,16,9,80));
	equipments.push(new equipment("Great War Tank","Light Tank", "Great War Tank",8,4,4,18,5,15,80,6,7,80));
	equipments.push(new equipment("Light Tank I","Light Tank", "Light Tank I",13,4,4,26,10,10,80,10,8,80));
	equipments.push(new equipment("Light Tank II","Light Tank", "Light Tank II",16,6,5,36,15,30,80,12,9,80));
	equipments.push(new equipment("Light Tank III","Light Tank", "Light Tank III",22,9,6,46,30,50,80,14,10,80));
	equipments.push(new equipment("Basic Amphibious Tank","Amphibious Tank","Basic Amphibious Tank",13,4,4,26,20,10,80,7,10,80));
	equipments.push(new equipment("Improved Amphibious Tank","Amphibious Tank","Improved Amphibious Tank",19,14,5,36,80,61,90,8,13,80));
	equipments.push(new equipment("Medium Tank I","Medium Tank","Medium Tank I",19,14,5,36,60,61,90,8,12,80));
	equipments.push(new equipment("Medium Tank II","Medium Tank","Medium Tank II",25,19,7,51,80,81,90,9,13,80));
	equipments.push(new equipment("Medium Tank III","Medium Tank","Medium Tank III",32,24,9,66,90,91,90,10,14,80));
	equipments.push(new equipment("Heavy Tank I","Heavy Tank","Heavy Tank I",15,12,6,36,70,35,95,5,25,80));
	equipments.push(new equipment("Heavy Tank II","Heavy Tank","Heavy Tank II",27,30,8,52,110,111,95,6,27,80));
	equipments.push(new equipment("Heavy Tank III","Heavy Tank","Heavy Tank III",35,40,9,67,130,131,95,6,30,80));
	equipments.push(new equipment("Super-Heavy Tank","Super-Heavy Tank","Super-Heavy Tank",38,45,10,74,145,146,99,4,100,80));
	equipments.push(new equipment("Modern Tank","Modern Tank","Modern Tank",40,32,10,84,130,131,98,10,28,80));
	equipments.push(new equipment("Light Tank Destroyer I","Light Tank Destroyer","Light Tank I",6,10,4,1,10,50,80,10,8,80));
	equipments.push(new equipment("Light Tank Destroyer II","Light Tank Destroyer","Light Tank I",6,16,5,1.3,15,77,80,12,9,80));
	equipments.push(new equipment("Light Tank Destroyer III","Light Tank Destroyer","Light Tank I",8,24,7,1.8,30,99,80,14,10,80));
	equipments.push(new equipment("Medium Tank Destroyer I","Medium Tank Destroyer","Medium Tank I",5,20,5,1.3,60,88,90,8,12,80));
	equipments.push(new equipment("Medium Tank Destroyer II","Medium Tank Destroyer","Medium Tank II",6,26,6,1.5,80,110,90,9,13,80));
	equipments.push(new equipment("Medium Tank Destroyer III","Medium Tank Destroyer","Medium Tank III",8,32,7,1.8,90,120,90,10,14,80));
	equipments.push(new equipment("Heavy Tank Destroyer I","Heavy Tank Destroyer","Heavy Tank I",6,25,4,1.0,70,96,95,5,25,80));
	equipments.push(new equipment("Heavy Tank Destroyer II","Heavy Tank Destroyer","Heavy Tank II",8,42,6,1.5,110,140,95,6,27,80));
	equipments.push(new equipment("Heavy Tank Destroyer III","Heavy Tank Destroyer","Heavy Tank III",10,60,7,1.8,130,160,95,6,30,80));
	equipments.push(new equipment("Super-Heavy Tank Destroyer","Super-Heavy Tank Destroyer","Super-Heavy Tank",12,70,7,1.8,145,170,99,4,100,80));
	equipments.push(new equipment("Modern Tank Destroyer","Modern Tank Destroyer","Modern Tank",10,42,8,2,130,165,98,10,28,80));
	equipments.push(new equipment("Light SP Artillery I","Light SP Artillery","Light Tank I",34,0.5,4,2,5,4,50,10,8,80));
	equipments.push(new equipment("Light SP Artillery II","Light SP Artillery","Light Tank I",42,1,5,2.5,10,4,50,12,9,80));
	equipments.push(new equipment("Light SP Artillery III","Light SP Artillery","Light Tank I",46,1.5,7,3.5,25,4,50,14,10,80));
	equipments.push(new equipment("Medium SP Artillery I","Medium SP Artillery","Light Tank I",42,1.0,5,3,45,5,65,8,12,80));
	equipments.push(new equipment("Medium SP Artillery II","Medium SP Artillery","Medium Tank I",50,1.5,6,3.0,50,5,65,9,13,80));
	equipments.push(new equipment("Medium SP Artillery III","Medium SP Artillery","Medium Tank I",55,2.0,7,4.0,58,5,65,10,14,80));
	equipments.push(new equipment("Heavy SP Artillery I","Heavy SP Artillery","Heavy Tank I",55,1.0,4,2,45,8,80,5,25,80));
	equipments.push(new equipment("Heavy SP Artillery II","Heavy SP Artillery","Heavy Tank I",74,2.0,6,3.0,68,8,80,6,27,80));
	equipments.push(new equipment("Heavy SP Artillery III","Heavy SP Artillery","Heavy Tank I",80,2.5,7,3.5,90,8,80,6,30,80));
	equipments.push(new equipment("Super-Heavy SP Artillery","Super-Heavy SP Artillery","Super-Heavy Tank",85,3.0,7,3.5,100,9,90,4,100,80));
	equipments.push(new equipment("Modern SP Artillery","Modern SP Artillery","Modern Tank",80,3.0,8,4.0,90,10,85,10,28,80));
	equipments.push(new equipment("Light SP Anti-Air I","Light SP Anti-Air","Light Tank I",2,1.0,2,2,5,5,50,10,10,80));
	equipments.push(new equipment("Light SP Anti-Air II","Light SP Anti-Air","Light Tank II",3,1.5,2.5,2.5,10,20,50,12,11,80));
	equipments.push(new equipment("Light SP Anti-Air III","Light SP Anti-Air","Light Tank III",4.5,4.0,3.5,3.5,25,35,50,14,12,80));
	equipments.push(new equipment("Medium SP Anti-Air I","Light SP Anti-Air","Medium Tank I",4.5,3.0,2.5,2.5,45,40,65,8,12,80));
	equipments.push(new equipment("Medium SP Anti-Air II","Medium SP Anti-Air","Medium Tank II",6,4.5,3,3.0,50,60,65,9,13,80));
	equipments.push(new equipment("Medium SP Anti-Air III","Medium SP Anti-Air","Medium Tank III",7.5,6.0,3.5,3.5,58,70,65,10,14,80));
	equipments.push(new equipment("Heavy SP Anti-Air I","Heavy SP Anti-Air","Heavy Tank I",4.5,4.0,2,2,45,25,80,5,25,80));
	equipments.push(new equipment("Heavy SP Anti-Air II","Heavy SP Anti-Air","Heavy Tank II",6,4.5,3.0,3.0,68,60,80,6,27,80));
	equipments.push(new equipment("Heavy SP Anti-Air III","Heavy SP Anti-Air","Heavy Tank III",7.5,6.0,3.5,3.5,90,88,80,6,30,80));
	equipments.push(new equipment("Super-Heavy SP Anti-Air","Super-Heavy SP Anti-Air","Super-Heavy Tank",11.5,9.0,3.5,3.5,100,98,90,4,100,80));
	equipments.push(new equipment("Modern SP Anti-Air","Modern SP Anti-Air","Modern Tank",9.0,7.5,4.0,4.0,90,100,85,10,28,80));
	equipments.push(new equipment("Towed Artillery","Artillery","Artillery I",25,2,10,6,-1,5,-1,-1,3.5,80));
	equipments.push(new equipment("Improved Artillery","Artillery","Artillery II",30,2,15,7,-1,5,-1,-1,4.0,80));
	equipments.push(new equipment("Advanced Artillery","Artillery","Artillery III",34,2,18,8,-1,5,-1,-1,4.5,80));
	equipments.push(new equipment("Towed Anti-Tank","Anti-Tank","Anti-Tank I",4,15,4,-1,-1,75,-1,-1,4,80));
	equipments.push(new equipment("Improved Anti-Tank","Anti-Tank","Anti-Tank II",4,22,4,-1,-1,88,-1,-1,5.0,80));
	equipments.push(new equipment("Advanced Anti-Tank","Anti-Tank","Anti-Tank III",4,30,4,-1,-1,108,-1,-1,6.0,80));
	equipments.push(new equipment("Towed Anti-Air","Anti-Tank","Anti-Air I",3,7,4,1,-1,25,-1,-1,4,80));
	equipments.push(new equipment("Improved Anti-Air","Anti-Tank","Anti-Air II",3.5,11,4,1,-1,60,-1,-1,5.0,80));
	equipments.push(new equipment("Advanced Anti-Air","Anti-Tank","Anti-Air III",4,15,4,1,-1,88,-1,-1,6.0,80));
	equipments.push(new equipment("Rocket Artillery","Rocket Artillery","Rocket Artillery",30,1,12,9,-1,2,-1,-1,4,80));
	equipments.push(new equipment("Advanced Rocket Artillery","Rocket Artillery","Advanced Rocket Artillery",38,1,15,12,-1,2,-1,-1,5,80));
	equipments.push(new equipment("Motorized Rocket Artillery","Motorized Rocket Artillery","Motorized",36,1,15,12,-1,2,-1,-1,12,80));
	
	class unitclass
	{
		constructor(name,soft_attack,hard_attack,defense,breakthrough,armor,piercing,hardness,speed,production_cost,reliability)
		{
			this._name = name;
			if (soft_attack == null)
				this._soft_attack = -1;
			else
				this._soft_attack = soft_attack;
			if (hard_attack == null)
				this._hard_attack = -1;
			else
				this._hard_attack = hard_attack;
			if (defense == null)
				this._defense = -1;
			else
				this._defense = defense;
			if (breakthrough == null)
				this._breakthrough = -1;
			else
				this._breakthrough = breakthrough;
			if (armor == null)
				this._armor = -1;
			else
				this._armor = armor;
			if (piercing == null)
				this._piercing = -1;
			else
				this._piercing = piercing;
			if (hardness == null)
				this._hardness = -1;
			else
				this._hardness;
			if (speed == null)
				this._speed = -1;
			else
				this._speed = speed;
			if (production_cost == null)
				this._production_cost = -1;
			else
				this._production_cost = production_cost;
			if (reliability == null)
				this._reliability = -1;
			else
				this._reliability;
		}
		get name(){ return this._name;}
		get soft_attack(){ return this._soft_attack;}
		get hard_attack(){ return this._hard_attack;}
		get defense(){ return this._defense;}
		get breakthrough(){ return this._breakthrough;}
		get armor(){ return this._armor;}
		get piercing(){ return this._piercing;}
		get hardness(){ return this._hardness;}
		get speed(){ return this._speed;}
		get production_cost(){ return this._production_cost;}
		get reliability(){ return this._reliability;}

		set name(value){ this._name = value;}
		set soft_attack(value){ this._soft_attack = value;}
		set hard_attack(value){ this._hard_attack = value;}
		set defense(value){ this._defense = value;}
		set breakthrough(value){ this._breakthrough = value;}
		set armor(value){ this._armor = value;}
		set piercing(value){ this._piercing = value;}
		set hardness(value){ this._hardness = value;}
		set speed(value){ this._speed = value;}
		set production_cost(value){ this._production_cost = value;}
		set reliability(value){ this._reliability = value;}
	}

	var units = new Array();
	units.push(new unitclass("Amphibious Tank"));
	units.push(new unitclass("Amtrac"));
	units.push(new unitclass("Anti-Air"));
	units.push(new unitclass("Anti-Tank"));
	units.push(new unitclass("Armored Car"));
	units.push(new unitclass("Artillery"));
	units.push(new unitclass("Calvary"));
	units.push(new unitclass("Heavy SP Anti-Air"));
	units.push(new unitclass("Heavy SP Artillery"));
	units.push(new unitclass("Heavy Tank"));
	units.push(new unitclass("Heavy Tank Destroyer"));
	units.push(new unitclass("Infantry",0));
	units.push(new unitclass("Light SP Anti-Air"));
	units.push(new unitclass("Light SP Artillery"));
	units.push(new unitclass("Light Tank"));
	units.push(new unitclass("Light Tank Destroyer"));
	units.push(new unitclass("Marines"));
	units.push(new unitclass("Mechanized"));
	units.push(new unitclass("Medium SP Anti-Air"));
	units.push(new unitclass("Medium SP Artillery"));
	units.push(new unitclass("Medium Tank"));
	units.push(new unitclass("Medium Tank Destroyer"));
	units.push(new unitclass("Modern SP Anti-Air"));
	units.push(new unitclass("Modern SP Artillery"));
	units.push(new unitclass("Modern Tank"));
	units.push(new unitclass("Modern Tank Destroyer"));
	units.push(new unitclass("Motorized"));
	units.push(new unitclass("Motorized Anti-Air"));
	units.push(new unitclass("Motorized Anti-Tank"));
	units.push(new unitclass("Motorized Artillery"));
	units.push(new unitclass("Mountain"));
	units.push(new unitclass("Paratrooper"));
	units.push(new unitclass("Rocket Artillery"));
	units.push(new unitclass("Super-Heavy SP Anti-Air"));
	units.push(new unitclass("Super-Heavy SP Artillery"));
	units.push(new unitclass("Super-Heavy Tank"));
	units.push(new unitclass("Super-Heavy Tank Destroyer"));
	units.push(new unitclass("Truck Drawn Rocket Artillery"));
	
	class unitbonus
	{
		constructor(name,soft_attack,hard_attack,defense,breakthrough,armor,piercing,hardness,speed,production_cost,reliability)
		{
			this._name = name;
			this._soft_attack = soft_attack;
			this._hard_attack = hard_attack;
			this._defense = defense;
			this._breakthrough = breakthrough;
			this._armor = armor;
			this._piercing = piercing;
			this._hardness;
			this._speed = speed;
			this._production_cost = production_cost;
			this._reliability;
		}
		get soft_attack(){ return this._soft_attack;}
		get hard_attack(){ return this._hard_attack;}
		get defense(){ return this._defense;}
		get breakthrough(){ return this._breakthrough;}
		get armor(){ return this._armor;}
		get piercing(){ return this._piercing;}
		get hardness(){ return this._hardness;}
		get speed(){ return this._speed;}
		get production_cost(){ return this._production_cost;}
		get reliability(){ return this._reliability;}
	}

	class sideunitstat
	{
		constructor(side,units)
		{
			this._side = side;
			this.unit = units;
		}
		unitidx(unittype)
		{
			var i;
			var retidx = -1;
			for (i =0; i < this.unit.length && retidx == -1; i++)
			{
				if (unittype == this.unit[i].name)
					retidx = i;
			}
			return retidx;
		}
	}
	var sideunitstats = new Array();
	sideunitstats.push(new sideunitstat("atk",units)); 
	sideunitstats.push(new sideunitstat("def",units));


	var techs = new Array();// = [];
	techs.push(new tech(1918,"Infantry Technology","Support Weapons","Support Weapons I",null));
	techs.push(new tech(1938,"Infantry Technology","Support Weapons","Support Weapons II","Support Weapons I"));
	techs.push(new tech(1940,"Infantry Technology","Support Weapons","Support Weapons III","Support Weapons II"));
	techs.push(new tech(1942,"Infantry Technology","Support Weapons","Support Weapons IV","Support Weapons III"));

	techs.push(new tech(1918,"Infantry Technology","Infantry Equipment","Basic Infantry Equipment",null));
	techs.push(new tech(1936,"Infantry Technology","Infantry Equipment","Infantry Equipment I",techs[techs.length - 1].name));
	techs.push(new tech(1938,"Infantry Technology","Infantry Equipment","Improved Infantry Equipment I",techs[techs.length - 1].name));
	techs.push(new tech(1939,"Infantry Technology","Infantry Equipment","Infantry Equipment II",techs[techs.length - 1].name));
	techs.push(new tech(1940,"Infantry Technology","Infantry Equipment","Improved Infantry Equipment II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Infantry Technology","Infantry Equipment","Infantry Equipment III",techs[techs.length - 1].name));
	techs.push(new tech(1944,"Infantry Technology","Infantry Equipment","Improved Infantry Equipment III",techs[techs.length - 1].name));

	techs.push(new tech(1942,"Infantry Technology","Infantry Anti-Tank","Infantry Anti-Tank I","Infantry Equipment II"));
	techs.push(new tech(1943,"Infantry Technology","Infantry Anti-Tank","Infantry Anti-Tank II",techs[techs.length - 1].name));

	techs.push(new tech(1943,"Infantry Technology","Night Vision","Night Vision I",null));
	techs.push(new tech(1946,"Infantry Technology","Night Vision","Night Vision II",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Infantry Technology","Motorized","Motorized",null));
	techs.push(new tech(1940,"Infantry Technology","Motorized","Mechanized I",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Infantry Technology","Motorized","Mechanized II",techs[techs.length - 1].name));
	techs.push(new tech(1944,"Infantry Technology","Motorized","Mechanized III",techs[techs.length - 1].name));

	techs.push(new tech(1941,"Infantry Technology","Amtrac","Basic Amtrac","Mechanized II"));
	techs.push(new tech(1943,"Infantry Technology","Amtrac","Improved Amtrac",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Infantry Technology","Armored Car","Interwar Armored Car","Motorized"));
	techs.push(new tech(1940,"Infantry Technology","Armored Car","Basic Armored Car",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Infantry Technology","Armored Car","Improved Armored Car",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Infantry Technology","Armored Car","Anti-Tank Armored Car",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Infantry Technology","Marines","Marines I",null));
	techs.push(new tech(1939,"Infantry Technology","Marines","Marines II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Infantry Technology","Marines","Marines III",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Infantry Technology","Paratroopers","Paratroopers I",null));
	techs.push(new tech(1939,"Infantry Technology","Paratroopers","Paratroopers II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Infantry Technology","Paratroopers","Paratroopers III",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Infantry Technology","Mountain Infantry","Mountain Infantry I",null));
	techs.push(new tech(1939,"Infantry Technology","Mountain Infantry","Mountain Infantry II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Infantry Technology","Mountain Infantry","Mountain Infantry III",techs[techs.length - 1].name));

	techs.push(new tech(1938,"Infantry Technology","Special Forces","Special Forces",null));
	techs.push(new tech(1940,"Infantry Technology","Special Forces","Special Forces Training",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Infantry Technology","Special Forces","Extreme Environment Training",techs[techs.length - 1].name));
	techs.push(new tech(1944,"Infantry Technology","Special Forces","Elite Forces","Special Forces"));

	techs.push(new tech(1940,"Infantry Technology","Special Forces B","Expanded Special Forces Program","Special Forces"));
	techs.push(new tech(1942,"Infantry Technology","Special Forces B","Survival Training",techs[techs.length - 1].name));

	techs.push(new tech(1918,"Armor Technology","Tanks","Great War Tank",null))

	techs.push(new tech(1934,"Armor Technology","Light Tanks","Light Tank I",techs[techs.length - 1].name));
	techs.push(new tech(1936,"Armor Technology","Light Tanks","Light Tank II",techs[techs.length - 1].name));
	techs.push(new tech(1941,"Armor Technology","Light Tanks","Light Tank III",techs[techs.length - 1].name));

	techs.push(new tech(1939,"Armor Technology","Medium Tanks","Medium Tank I", "Light Tank II"));
	techs.push(new tech(1941,"Armor Technology","Medium Tanks","Medium Tank II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Armor Technology","Medium Tanks","Medium Tank III",techs[techs.length - 1].name));

	techs.push(new tech(1934,"Armor Technology","Heavy Tanks","Heavy Tank I","Great War Tank"));
	techs.push(new tech(1941,"Armor Technology","Heavy Tanks","Heavy Tank II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Armor Technology","Heavy Tanks","Heavy Tank III",techs[techs.length - 1].name));

	techs.push(new tech(1943,"Armor Technology","Super-Heavy Tanks","Super-Heavy Tank","Heavy Tank II"));

	techs.push(new tech(1945,"Armor Technology","Modern Tanks","Modern Tank","Medium Tank III")); // can also be heavy tank III - need to figure this out

	techs.push(new tech(1940,"Armor Technology","Amphibious Tanks","Amphibious Tank I", "Light Tank II"));
	techs.push(new tech(1942,"Armor Technology","Amphibious Tanks","Amphibious Tank II",techs[techs.length - 1].name));

	techs.push(new tech(1934,"Artillery Technology","Artillery","Artillery I",null));
	techs.push(new tech(1936,"Artillery Technology","Artillery","Interwar Artillery",techs[techs.length - 1].name));
	techs.push(new tech(1939,"Artillery Technology","Artillery","Artillery II",techs[techs.length - 1].name));
	techs.push(new tech(1940,"Artillery Technology","Artillery","Improved Artillery Upgrade I",techs[techs.length - 1].name));
	techs.push(new tech(1941,"Artillery Technology","Artillery","Improved Artillery Upgrade II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Artillery Technology","Artillery","Artillery III",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Artillery Technology","Artillery","Advanced Artillery Upgrade",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Artillery Technology","Anti-Air","Anti-Air I","Artillery I"));
	techs.push(new tech(1939,"Artillery Technology","Anti-Air","Anti-Air Upgrade",techs[techs.length - 1].name));
	techs.push(new tech(1940,"Artillery Technology","Anti-Air","Anti-Air II",techs[techs.length - 1].name));
	techs.push(new tech(1941,"Artillery Technology","Anti-Air","Improved Anti-Air Upgrade I",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Artillery Technology","Anti-Air","Improved Anti-Air Upgrade II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Artillery Technology","Anti-Air","Anti-Air III",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Artillery Technology","Anti-Tank","Anti-Tank I","Artillery I"));
	techs.push(new tech(1939,"Artillery Technology","Anti-Tank","Anti-Tank Upgrade",techs[techs.length - 1].name));
	techs.push(new tech(1940,"Artillery Technology","Anti-Tank","Anti-Tank II",techs[techs.length - 1].name));
	techs.push(new tech(1941,"Artillery Technology","Anti-Tank","Improved Anti-Tank Upgrade I",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Artillery Technology","Anti-Tank","Improved Anti-Tank Upgrade II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Artillery Technology","Anti-Tank","Anti-Tank III",techs[techs.length - 1].name));

	techs.push(new tech(1940,"Artillery Technology","Rocket Artillery","Rocket Artillery","Artillery I"));
	techs.push(new tech(1941,"Artillery Technology","Rocket Artillery","Rocket Artillery Upgrade I",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Artillery Technology","Rocket Artillery","Rocket Artillery Upgrade II",techs[techs.length - 1].name));
	techs.push(new tech(1943,"Artillery Technology","Rocket Artillery","Advanced Rocket Artillery",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Support Technology","Engineer Company","Engineer Company I",null));
	techs.push(new tech(1939,"Support Technology","Engineer Company","Engineer Company II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Support Technology","Engineer Company","Engineer Company III",techs[techs.length - 1].name));
	techs.push(new tech(1945,"Support Technology","Engineer Company","Engineer Company IV",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Support Technology","Recon Company","Recon Company I",null));
	techs.push(new tech(1939,"Support Technology","Recon Company","Recon Company II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Support Technology","Recon Company","Recon Company III",techs[techs.length - 1].name));
	techs.push(new tech(1945,"Support Technology","Recon Company","Recon Company IV",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Support Technology","Military Police","Military Police I",null));
	techs.push(new tech(1939,"Support Technology","Military Police","Military Police II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Support Technology","Military Police","Military Police III",techs[techs.length - 1].name));
	techs.push(new tech(1945,"Support Technology","Military Police","Military Police IV",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Support Technology","Maintenance Company","Maintenance Company I",null));
	techs.push(new tech(1939,"Support Technology","Maintenance Company","Maintenance Company II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Support Technology","Maintenance Company","Maintenance Company III",techs[techs.length - 1].name));
	techs.push(new tech(1945,"Support Technology","Maintenance Company","Maintenance Company IV",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Support Technology","Field Hospital","Field Hospital I","Motorized"));
	techs.push(new tech(1939,"Support Technology","Field Hospital","Field Hospital II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Support Technology","Field Hospital","Field Hospital III",techs[techs.length - 1].name));
	techs.push(new tech(1945,"Support Technology","Field Hospital","Field Hospital IV",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Support Technology","Logistics Company","Logistics Company I","Motorized"));
	techs.push(new tech(1939,"Support Technology","Logistics Company","Logistics Company II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Support Technology","Logistics Company","Logistics Company III",techs[techs.length - 1].name));
	techs.push(new tech(1945,"Support Technology","Logistics Company","Logistics Company IV",techs[techs.length - 1].name));

	techs.push(new tech(1936,"Support Technology","Signal Company","Signal Company I","Motorized"));
	techs.push(new tech(1939,"Support Technology","Signal Company","Signal Company II",techs[techs.length - 1].name));
	techs.push(new tech(1942,"Support Technology","Signal Company","Signal Company III",techs[techs.length - 1].name));
	techs.push(new tech(1945,"Support Technology","Signal Company","Signal Company IV",techs[techs.length - 1].name));


	function techsYear(who, year)
	{
		var i;
		var side;
		if (who == "Attacker")
			side = "atk";
		else
			side = "def";
		for (i = 0; i < techs.length; i++)
		{
			if (techs[i].year <= year)
			{
				var elem = document.getElementById(side + ":" + techs[i].name);
				if (elem != null)
					elem.checked = true;
			}
			else
			{
				var elem = document.getElementById(side + ":" + techs[i].name);
				if (elem != null)
					elem.checked = false;
			}
		}
	}
	function setPrereqs(side,techChange)
	{
		var i;
		for (i = 0; i < techs.length; i++)
		{
			if (techs[i].name == techChange)
			{
				if (techs[i].prereq != null)
				{
					var elem = document.getElementById(side + ":" + techs[i].prereq);
					if (elem != null)
						elem.checked = true;
					setPrereqs(side,techs[i].prereq);
				}
			}
		}
	}
	function clearPostreqs(side,techChange)
	{
		var i;
		for (i = 0; i < techs.length; i++)
		{
			if (techs[i].prereq == techChange)
			{
				var elem = document.getElementById(side + ":" + techs[i].name);
				if (elem != null)
					elem.checked = false;
				clearPostreqs(side,techs[i].name);
			}
		}
	}
	function testTechs(who, techChange)
	{
		var i;
		var side;
		if (who == "Attacker")
			side = "atk";
		else
			side = "def";
		if (techChange != "Army")
		{
			var elem = document.getElementById(side + ":" + techChange);
			if (elem != null)
			{
				var currval = elem.checked;
				if (currval)
				{
					setPrereqs(side,techChange);
				}
				else
				{
					clearPostreqs(side,techChange);
				}	
			}
		}
	}
	function determineUnitStats(who)
	{
		var side, sideidx;
		if (who == "Attacker")
		{
			side = "atk";
			sideidx = 0;
		}
		else
		{
			side = "def";
			sideidx = 1;
		}
		
		var unitidx = sideunitstats[sideidx].unitidx("Infantry");
				console.log(side + unitidx);
		
		
		// Infantry
		var elem = document.getElementById(side + ":Infantry Equipment III");
		if (elem != null && elem.checked)
		{
			sideunitstats[sideidx].unit[unitidx].soft_attack = 12;
			sideunitstats[sideidx].unit[unitidx].hard_attack = 2;
			sideunitstats[sideidx].unit[unitidx].piercing = 10;
			sideunitstats[sideidx].unit[unitidx].reliability = 80;
			sideunitstats[sideidx].unit[unitidx].defense = 34;
			sideunitstats[sideidx].unit[unitidx].breakthrough = 5;
		}
		else
		{
			elem = document.getElementById(side + ":Infantry Equipment II");
			if (elem != null && elem.checked)
			{
				sideunitstats[sideidx].unit[unitidx].soft_attack = 9;
				sideunitstats[sideidx].unit[unitidx].hard_attack = 1.5;
				sideunitstats[sideidx].unit[unitidx].piercing = 5;
				sideunitstats[sideidx].unit[unitidx].reliability = 90;
				sideunitstats[sideidx].unit[unitidx].defense = 28;
				sideunitstats[sideidx].unit[unitidx].breakthrough = 4;
			}
			else
			{
				elem = document.getElementById(side + ":Infantry Equipment I");
				if (elem != null && elem.checked)
				{
					sideunitstats[sideidx].unit[unitidx].soft_attack = 6;
					sideunitstats[sideidx].unit[unitidx].hard_attack = 1;
					sideunitstats[sideidx].unit[unitidx].piercing = 4;
					sideunitstats[sideidx].unit[unitidx].reliability = 90;
					sideunitstats[sideidx].unit[unitidx].defense = 22;
					sideunitstats[sideidx].unit[unitidx].breakthrough = 3;
				}
				else
				{
					sideunitstats[sideidx].unit[unitidx].soft_attack = 3;
					sideunitstats[sideidx].unit[unitidx].hard_attack = 2;
					sideunitstats[sideidx].unit[unitidx].piercing = 1;
					sideunitstats[sideidx].unit[unitidx].reliability = 90;
					sideunitstats[sideidx].unit[unitidx].defense = 20;
					sideunitstats[sideidx].unit[unitidx].breakthrough = 2;
				}
			}
		}
		console.log(sideunitstats[sideidx].unit[unitidx].soft_attack);
	}
	function recalculate(who, techChange)
	{
		//console.log("recalculate called " + techChange);
		testTechs(who,techChange);
		if (techChange != "Army")
			determineUnitStats(who);
	}
	var i, j, k;
	for (k = 0; k < 2; k++)
    //k = 0;
	{
		var sideDescriptor;
		var sideDescriptorAdvective;
		var side;
		if (k == 0)
		{
			side = "atk";
			sideDescriptor = "Attacker";
			sideDescriptorAdvective = "Attacking";
		}
		else {
			side = "def";
			sideDescriptor = "Defender";
			sideDescriptorAdvective = "Defending";
		}
		var years = ["1918","1934","1936","1937","1938","1939","1940","1941","1942","1943","1944","1945","1946","1950"];
	 
		var tabdivelem = document.createElement("div");
		tabdivelem.className = "tabcontent";
		tabdivelem.id = side + ":Tech";
		var h1elem = document.createElement("h1");
		h1elem.style = "font-size:32px;text-align:center;";
		h1elem.insertAdjacentText("beforeend", sideDescriptorAdvective + " Army Technology");
		tabdivelem.appendChild(h1elem);
	
		var divelem = document.createElement("div");
		divelem.id = side + ":years";
		for (i = 0; i < years.length; i++)
		{
			var inpelem = document.createElement("input");
			inpelem.type = "button";
			inpelem.value = years[i];
			inpelem.setAttribute("onclick","techsYear('" + sideDescriptor + "',"+years[i]+");");
			divelem.appendChild(inpelem);
		}
		tabdivelem.appendChild(divelem);

		var lastGroup = null;	
		var lastMasterGroup = null;
		var MGdivElem = null;
		divelem = null;
		for (i = 0; i < techs.length; i++)
		{
			if (techs[i].group != lastGroup)
			{
				if (lastGroup != null)
				{
					MGdivElem.appendChild(divelem);
				}
				if (techs[i].mastergroup != lastMasterGroup)
				{
					if (lastMasterGroup != null)
					{
						tabdivelem.appendChild(MGdivElem);
					}
					MGdivElem =document.createElement("div");
					MGdivElem.id = side + ":MG " + techs[i].mastergroup;
					var h2elem = document.createElement("h2");
					h2elem.style = "font-size:24px;text-align:center;";
					h2elem.insertAdjacentText("beforeend", techs[i].mastergroup);
					tabdivelem.appendChild(h2elem);
					lastMasterGroup = techs[i].mastergroup;
				} 
				divelem = document.createElement("div");
				divelem.id = side + ":" + techs[i].group;
				var h3elem = document.createElement("h3");
				h3elem.style = "font-size:18px;text-align:center;";
				h3elem.insertAdjacentText("beforeend", techs[i].group);
				MGdivElem.appendChild(h3elem);
				lastGroup = techs[i].group;
			}
			var inpelem = document.createElement("input");
			inpelem.type = "checkbox";
			inpelem.id = side + ":" + techs[i].name;
			inpelem.setAttribute("onclick","recalculate('" + sideDescriptor + "','" + techs[i].name + "');");
			var labelelem = document.createElement("label");
			labelelem.setAttribute("for",side + ":" + techs[i].name);
			labelelem.insertAdjacentText("beforeend", techs[i].name);
			divelem.appendChild(inpelem);
			divelem.appendChild(labelelem);
		}
		MGdivElem.appendChild(divelem);
		tabdivelem.appendChild(MGdivElem); // add the last one
		document.body.appendChild(tabdivelem)
	
		tabdivelem = document.createElement("div");
		tabdivelem.className = "tabcontent";
		tabdivelem.id = side + ":Div";
		h1elem = document.createElement("h1");
		h1elem.style = "font-size:32px;text-align:center;";
		h1elem.insertAdjacentText("beforeend", sideDescriptorAdvective + " Army Composition");
		tabdivelem.appendChild(h1elem);

		var tabledivelem = document.createElement("div");
		tabledivelem.id = side + ":tableDiv";
		var tableelem = document.createElement("table");
		tableelem.id = side + ":table";
		var tableHeadelem = document.createElement("thead");
		tableHeadelem.id = side + ":tableHead";
		var tableRowelem = document.createElement("tr");
		var tableHelem = document.createElement("th");
		tableHelem.insertAdjacentText("beforeend", "Unit type");
		tableRowelem.appendChild(tableHelem);
		for (i = 1; i <= 5; i++)
		{
			tableHelem = document.createElement("th");
			tableHelem.style = "text-align:center";
			tableHelem.insertAdjacentText("beforeend", "Division " + i);
			tableRowelem.appendChild(tableHelem);
		}
	
		tableHeadelem.appendChild(tableRowelem);
		tableelem.appendChild(tableHeadelem);
		tableHeadelem = document.createElement("tbody");
		tableHeadelem.id = side + ":tableBody";
		for (i = 0; i < units.length; i++)
		{
			tableRowelem = document.createElement("tr");
			tableHelem = document.createElement("th");
			tableHelem.insertAdjacentText("beforeend", units[i].name);
			tableRowelem.appendChild(tableHelem);
			var j;
			for (j = 1; j <= 5;  j++)
			{
				tableHelem = document.createElement("td");
				var inpElem = document.createElement("input");
				inpElem.type = "number";
				inpElem.style = "text-align:center;";
				inpElem.id = side + ":Army " + j + units[i].name;
				inpElem.setAttribute("onchange","recalculate('" + sideDescriptor + "','Army');");
				tableHelem.appendChild(inpElem);
				tableRowelem.appendChild(tableHelem);
			}	
			tableHeadelem.appendChild(tableRowelem);
		}
		tableelem.appendChild(tableHeadelem);
		tableHeadelem = document.createElement("tfoot");
		tableHeadelem.id = side + ":tableFoot";
		tableRowelem = document.createElement("tr");
		tableHelem = document.createElement("th");
		tableHelem.setAttribute("colspan","6");
		tableHelem.style = "text-align:center;"
		tableHelem.insertAdjacentText("beforeend", "Stats");
		tableRowelem.appendChild(tableHelem);
		tableHeadelem.appendChild(tableRowelem);
		var stats = ["Organization", "HP", "Soft Attack", "Hard Attack", "Piercing", "Armor", "Defense", "Breakthrough", "Width" ]
		for (i = 0; i < stats.length; i++)
		{
			tableRowelem = document.createElement("tr");
			tableHelem = document.createElement("th");
			tableHelem.insertAdjacentText("beforeend", stats[i]);
			tableRowelem.appendChild(tableHelem);
			var j;
			for (j = 1; j <= 5; j++)
			{
				tableHelem = document.createElement("td");
				var inpElem = document.createElement("output");
				inpElem.style = "text-align:center;";
				inpElem.id = side + ":" + stats[i] + " " + j;
				tableHelem.appendChild(inpElem);
				tableRowelem.appendChild(tableHelem);
			}
			tableHeadelem.appendChild(tableRowelem);
		}
		tableelem.appendChild(tableHeadelem);
		tabledivelem.appendChild(tableelem);
		tabdivelem.appendChild(tabledivelem);
		document.body.appendChild(tabdivelem)
		var elem;
		for (i = 1; i <= 5; i++)
		{
			elem = document.getElementById(side + ":Organization " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":HP " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Soft Attack " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Hard Attack " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Piercing " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Armor " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Defense " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Breakthrough " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Hardness " + i);
			if (elem != null)
				elem.value = 0;		
			elem = document.getElementById(side + ":Width " + i);
			if (elem != null)
				elem.value = 0;		
		}
		elem = document.getElementById(side + ":Width");
		if (elem != null)
			elem.value = 0;		
		elem = document.getElementById(side + ":Survival");
		if (elem != null)
			elem.value = 0;
	} // end of attack / defense loop

	selectTab(null,"Summary");
	document.getElementById("tab:Summary").className += " active";
	techsYear("Attacker",1936);
	techsYear("Defender",1936);