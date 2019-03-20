$(document).ready(function(){

    var generateLegends = false;
    var generateWeapons = false;
    var generateArmor = false;
    var generateGrenades = false;
    var generateAttachments = false;
    var generateMeds = false;
    var generateDrop = false;
    var generateSpecial = false;


    var legends = ['Bloodhound', 'Wraith', 'Gibraltar', 'Bangalore', 'Caustic', 'Mirage', 'Octane', 'Pathfinder', 'Lifeline'];

    var weapons = ['Only light weapons', 'Only heavy weapons', 'Only energy weapons', 'Only shotguns', "You must run the same gun in both slots"];

    var armor = ['Level 1 only', 'Level 2 or worse only', 'Level 3 or worse only', 'Any armor', 'Only armor found on dead bodies'];

    var grenades = ['Only frags', 'Only arc stars', 'Only thermite grenades', 'Any grenades', 'No grenades'];

    var attachments = ['Any attachments', 'No hopups', 'No stocks', 'No mags', 'No barrel stabilizers', 'No sights', 'No attachments'];

    var meds = ['Only syringes', 'Only medkits', 'Only pheonix kits', 'Any meds', 'Only ground meds', 'Only meds from stashes'];

    var drops = ['Slum Lakes', 'Artillery', 'Relay', 'Wetlands', 'Cascades', 'The Pit', 'Runoff', 'Bunker', 'Swamps', 'Hydro Dam', 'Bridges', 'Repulsor', 'Market', 'Airbase', 'Skulltown', 'Thunderdome', 'Water Treatment', 'Supply Ship'];

    var special = ['FIRST TRY: You are only able to use the first two guns you pick up. No grenades!',
                   'GUERILLA WARFARE: You can pick up one gun (and its ammo) to start the game. After this, you can only acquire items through the death boxes of other players.',
                   'LIGHTWEIGHT: You cannot use any backpacks!',
                   'MY FAVORITE DROP SPOT: You can only loot items found at the site you drop at (Artillery, Skulltown, etc.). You can also loot the items from dead enemies.',
                   'SEPARATE BUT EQUAL: Each player must drop in a different zone, and cannot meet back together until the first circle has collapsed',
                   'DOWN AND OUT: You are not allowed to respawn any eliminated teammates.',
                   'SEVERELY UNDEREQUIPPED: You can only pick up grenades, shotgun ammo, and the best weapon in the game; the Mozambique. No other items may be used whatsoever.',
                   'TALENT DEPRIVED: You cannot use your legend ability OR your Ultimate ability.'];

    $("button").click(function(){

    $("div.generated").empty();


    if ($("input.legends").prop('checked')) {
        generateLegends = true;
    } else {
        generateLegends = false;
    }

    if ($("input.weapons").prop('checked')) {
        generateWeapons = true;
    } else {
        generateWeapons = false;
    }

    if ($("input.armor").prop('checked')) {
        generateArmor = true;
    } else {
        generateArmor = false;
    }

    if ($("input.grenades").prop('checked')) {
        generateGrenades = true;
    } else {
        generateGrenades = false;
    }
    if ($("input.attachments").prop('checked')) {
        generateAttachments = true;
    } else {
        generateAttachments = false;
    }
    if ($("input.meds").prop('checked')) {
        generateMeds = true;
    } else {
        generateMeds = false;
    }
    if ($("input.drop").prop('checked')) {
        generateDrop = true;
    } else {
        generateDrop = false;
    }
    if ($("input.special").prop('checked')) {
        generateSpecial = true;
        generateWeapons = false;
        generateArmor = false;
        generateGrenades = false;
        generateAttachments = false;
        generateMeds = false;
        generateDrop = false;
        generateLegends = false;

        $("input.legends").prop('checked', false);
        $("input.weapons").prop('checked', false);
        $("input.armor").prop('checked', false);
        $("input.grenades").prop('checked', false);
        $("input.attachments").prop('checked', false);
        $("input.meds").prop('checked', false);
        $("input.drop").prop('checked', false);

    } else {
        generateSpecial = false;
    }



/*
var array = [2, 5, 9];
console.log(array)
var index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}
// array = [2, 9]
console.log(array);
*/
    if (generateLegends) {
        $("div.generated").append('<h2 class="generated">Legends</h2>');
        $("div.generated").append('<p class="generated">' + legends[Math.floor(Math.random()*legends.length)] + "</p>");
    }
    if (generateWeapons) {
        $("div.generated").append('<h2 class="generated">Weapons</h2>');
        $("div.generated").append('<p class="generated">' + weapons[Math.floor(Math.random()*weapons.length)] + "</p>");
    }
    if (generateArmor) {
        $("div.generated").append('<h2 class="generated">Armor</h2>');
        $("div.generated").append('<p class="generated">' + armor[Math.floor(Math.random()*armor.length)] + "</p>");
    }
    if (generateGrenades) {
        $("div.generated").append('<h2 class="generated">Grenades</h2>');
        $("div.generated").append('<p class="generated">' + grenades[Math.floor(Math.random()*grenades.length)] + "</p>");
    }
    if (generateAttachments) {
        $("div.generated").append('<h2 class="generated">Attachments</h2>');
        $("div.generated").append('<p class="generated">' + attachments[Math.floor(Math.random()*attachments.length)] + "</p>");
    }
    if (generateMeds) {
        $("div.generated").append('<h2 class="generated">Meds</h2>');
        $("div.generated").append('<p class="generated">' + meds[Math.floor(Math.random()*meds.length)] + "</p>");
    }
    if (generateDrop) {
        $("div.generated").append('<h2 class="generated">Drop Spot</h2>');
        $("div.generated").append('<p class="generated">' + drops[Math.floor(Math.random()*drops.length)] + "</p>");
    }
    if (generateSpecial) {
        $("div.generated").append('<h2 class="generated">Special Challenge</h2>');
        $("div.generated").append('<p class="generated">' + special[Math.floor(Math.random()*special.length)] + "</p>");
    }
  });
});
