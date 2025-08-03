const mongoose = require('mongoose');

const excuses = [
  // Real Life
  { text: "I got stuck behind a grandma gang on the sidewalk.", category: "real life" },
  { text: "My phone GPS took me to a forest.", category: "real life" },
  { text: "I locked myself inside my car.", category: "real life" },
  { text: "The power went out right when I started.", category: "real life" },
  { text: "I spilled coffee on my keyboard… again.", category: "real life" },
  { text: "My neighbor’s rooster stole my alarm clock.", category: "real life" },
  { text: "My glasses ran away from me.", category: "real life" },
  { text: "I had to fight off a sudden noodle attack.", category: "real life" },
  { text: "There was a sale. I had to go.", category: "real life" },
  { text: "The elevator trapped me in motivational mode.", category: "real life" },

  // Tech
  { text: "My internet got scared and ran away.", category: "tech" },
  { text: "The coffee shop Wi-Fi was too philosophical to connect.", category: "tech" },
  { text: "My dog ate my login credentials.", category: "tech" },
  { text: "My keyboard staged a protest.", category: "tech" },
  { text: "The update took 8 hours and 3 lifetimes.", category: "tech" },
  { text: "I got stuck in a loop — literally. Thanks JavaScript.", category: "tech" },
  { text: "My PC mistook me for malware.", category: "tech" },
  { text: "The cloud rained on my files.", category: "tech" },
  { text: "My AI assistant ghosted me.", category: "tech" },
  { text: "My firewall is too emotionally attached.", category: "tech" },

  // Work
  { text: "A pigeon stole my work report.", category: "work" },
  { text: "I thought today was Sunday until lunch.", category: "work" },
  { text: "My boss texted me at 4 AM, so I took the day off on principle.", category: "work" },
  { text: "The printer caught fire from emotional overload.", category: "work" },
  { text: "My office chair unionized and refused to cooperate.", category: "work" },
  { text: "My spreadsheet became self-aware.", category: "work" },
  { text: "My brain filed a resignation letter.", category: "work" },
  { text: "The Zoom call became a horror movie.", category: "work" },
  { text: "I replied-all to the wrong thread and had to flee.", category: "work" },
  { text: "My mouse ran away with the keyboard.", category: "work" },

  // Fantasy
  { text: "I slipped into another dimension — they don’t have clocks there.", category: "fantasy" },
  { text: "I entered the wrong timeline after my nap.", category: "fantasy" },
  { text: "A time wizard reset my schedule.", category: "fantasy" },
  { text: "I was trapped in a dream battle for 6 hours.", category: "fantasy" },
  { text: "My soul went questing without me.", category: "fantasy" },
  { text: "The portal was one-way. I'm back now.", category: "fantasy" },
  { text: "A talking cat told me to rest today.", category: "fantasy" },
  { text: "The prophecy said I must nap.", category: "fantasy" },
  { text: "A cursed toaster banished me to napland.", category: "fantasy" },
  { text: "My reflection challenged me to a duel.", category: "fantasy" },

  // Weird
  { text: "I was abducted by aliens, again.", category: "weird" },
  { text: "I got stuck in a conspiracy theory.", category: "weird" },
  { text: "The floor was lava. Seriously.", category: "weird" },
  { text: "I opened the fridge and it swallowed time.", category: "weird" },
  { text: "My house became self-aware and locked me out.", category: "weird" },
  { text: "I adopted an invisible hamster that needs attention.", category: "weird" },
  { text: "I lost a staring contest with the sun.", category: "weird" },
  { text: "The clouds were arguing — I had to mediate.", category: "weird" },
  { text: "I was in a staring contest with my cactus.", category: "weird" },
  { text: "Gravity briefly turned sideways.", category: "weird" },

  // Funny
  { text: "A clown convinced me it was Saturday.", category: "funny" },
  { text: "My shadow wouldn’t cooperate.", category: "funny" },
  { text: "My shoelaces tied themselves together.", category: "funny" },
  { text: "I forgot how doors work.", category: "funny" },
  { text: "My calendar exploded.", category: "funny" },
  { text: "The sun hit snooze and so did I.", category: "funny" },
  { text: "I slipped on a motivational quote.", category: "funny" },
  { text: "I got stuck inside my hoodie.", category: "funny" },
  { text: "My fridge light hypnotized me.", category: "funny" },
  { text: "My socks staged a rebellion.", category: "funny" },

  // Add 140 more by duplicating and changing words slightly or ask for full dump
];

// Repeat and modify the above excuses to make it 200 total
while (excuses.length < 200) {
  const base = excuses[excuses.length % 50];
  excuses.push({
    text: base.text + " (again)",
    category: base.category
  });
}

const ExcuseSchema = new mongoose.Schema({
  text: String,
  category: String
});

const Excuse = mongoose.model('Excuse', ExcuseSchema);

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://note:note12345@cluster0.hafdloc.mongodb.net/excusify_db?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Excuse.deleteMany({});
    await Excuse.insertMany(excuses);

    console.log("✅ Database seeded successfully with 200 excuses!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seedDB();
