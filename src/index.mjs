import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

class AotSoldier {
  constructor(name, faction) {
    this._name = name;
    this._faction = faction;
    this._titankills = 0;
  }

  get name() {
    return this._name;
  }

  get faction() {
    return this._faction;
  }

  get titankills() {
    return this._titankills;
  }

  set titankills(kills) {
    if (kills >= 0) {
      this._titankills = kills;
    } else {
      console.error("Titan kills can't be negative");
    }
  }

  addTitanKills() {
    return ++this._titankills;
  }

  battleCry() {
    console.log("For Humanity!");
  }
}

class Brave extends AotSoldier {
  quote() {
    console.log(`I ${this._name} will eliminate every last titan`);
  }

  battleCry() {
    console.log("Eliminate all Titans!");
  }
}

class Garrison extends AotSoldier {
  constructor(name, faction, rank = 1) {
    super(name, faction);
    this._rank = rank;
  }

  get rank() {
    return this._rank;
  }

  upgradeRank() {
    return ++this._rank;
  }

  battleCry() {
    console.log("For Paradis!");
  }
}

class SurveyCorps extends AotSoldier {
  battleCry() {
    console.log("For Paradis!");
  }
}

const eren = new Brave("Eren", "Survey Corps");
const rico = new Garrison("Rico", "Garrison", 2);
const conny = new SurveyCorps("Conny", "Survey Corps");
eren.quote();
console.log(eren.addTitanKills());
eren.titankills = 10;
console.log(eren.addTitanKills());
console.log(eren.faction);
rico.battleCry();
rico.upgradeRank();
console.log(rico.rank);

const soldiers = [eren, rico, conny];
const facts = soldiers.map((soldier) => soldier.faction);
console.log(facts);

function renderSoldiers() {
  const container = document.getElementById("soldiers-container");

  soldiers.forEach((soldier) => {
    const soldierDiv = document.createElement("div");
    soldierDiv.innerHTML = `
    <h2>${soldier.name}</h2>
    <p><strong>Faction:</strong> ${soldier.faction}</p>
    <p><strong>Titan Kills:</strong> <span class="kills">${soldier.titankills}</span></p>
  `;

    const button = document.createElement("button");
    button.textContent = "Fight Titan";
    button.addEventListener("click", () => {
      soldier.addTitanKills();
      soldierDiv.querySelector(".kills").textContent = soldier.titankills;
    });

    soldierDiv.appendChild(button);
    container.appendChild(soldierDiv);
  });
}

const newSoldier = document.createElement("form");
const jean = new Brave("Jean", "Survey Corps");
soldiers.push(jean);
renderSoldiers();
