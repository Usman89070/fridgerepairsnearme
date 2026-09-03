-- Fridge Repairs Near Me — blog database schema
-- Import this file via Hostinger hPanel -> Databases -> phpMyAdmin
-- (open your new database, then Import tab, choose this file, click Go).

CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(200) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT NOT NULL,
  content LONGTEXT NOT NULL,
  featured_image VARCHAR(500) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- If you're updating an existing database instead of importing this file
-- fresh, run this one line instead to add the new column:
-- ALTER TABLE posts ADD COLUMN featured_image VARCHAR(500) DEFAULT NULL;

CREATE TABLE IF NOT EXISTS enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  suburb VARCHAR(150) NOT NULL,
  appliance VARCHAR(100) NOT NULL,
  brand VARCHAR(100) DEFAULT NULL,
  message TEXT NOT NULL,
  email_sent TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- If you're updating an existing database instead of importing this file
-- fresh, run just the CREATE TABLE IF NOT EXISTS enquiries block above.

-- Default admin login. Username: admin  /  Password: 9144a2bf2ceb
-- CHANGE THIS PASSWORD after your first login (Admin Dashboard -> Change Password).
INSERT INTO admin_users (username, password_hash) VALUES
('admin', '$2y$12$0b6fyM26MyGcrPq1fOEbeOJcIdBFEme2KetiOEEAU4Wtrp.pG1rDm');

INSERT INTO posts (slug, category, title, excerpt, content) VALUES
(
  '5-signs-your-fridge-needs-professional-repair',
  'Maintenance Tips',
  '5 Signs Your Fridge Needs Professional Repair',
  'From warm spots to unusual noises, some symptoms are easy to dismiss. Here''s what generally warrants a proper inspection rather than a wait-and-see approach.',
  'A fridge rarely fails without warning. In most cases there are early signs — small enough to ignore for a week or two, but worth paying attention to before they turn into a full breakdown, a kitchen full of spoiled food, or a repair that costs more than it needed to. Here are five of the more common signs worth acting on.

## 1. The fridge feels warmer than it used to
If milk is turning faster than normal or the fridge just doesn''t feel as cold as it did a few months ago, that''s usually the first sign something has changed. It doesn''t automatically mean the compressor has failed — airflow restrictions, a fan problem, a worn door seal or a faulty temperature sensor can all produce the same symptom. What matters is that the trend is worth investigating before it progresses to a fridge that isn''t cooling at all.

## 2. Ice is building up somewhere it shouldn''t
A dedicated freezer will always have some frost, but heavy, uneven ice build-up — particularly around the back panel, evaporator area or door seal — often points to a defrost system fault or a door that isn''t sealing properly. Left alone, that ice can restrict airflow and gradually reduce cooling performance elsewhere in the appliance.

## 3. New noises, or existing noises getting louder
Every fridge makes some operating noise — a compressor hum, an occasional click as it cycles. What''s worth attention is a NEW noise, or one that''s grown noticeably louder: buzzing, grinding, rattling or a repetitive clicking that doesn''t resolve. The cause could be as simple as a loose panel or as involved as a fan motor or compressor start component, but the noise itself is the appliance telling you something has changed.

## 4. Water where it shouldn''t be
Puddles inside the fridge, moisture pooling underneath, or water marks on the floor nearby are usually a drainage issue — a blocked defrost drain is the most common cause — rather than a sign the fridge itself is failing outright. Still, water near electrical components is not something to leave unaddressed, particularly if the appliance sits close to power outlets or flooring that can be damaged.

## 5. It''s running almost constantly
A fridge cycles the compressor on and off to maintain temperature; it shouldn''t be running non-stop. If it seems to be working overtime without ever settling, a few different things could be responsible — a door seal that''s no longer airtight, a dirty or restricted condenser, a fan issue, or a genuine refrigeration fault. Constant running is also the symptom most likely to show up as a noticeably higher power bill before anything else does.

## When to get it looked at
None of these signs on their own confirm exactly what''s wrong — several different faults can produce very similar symptoms, which is why diagnosis matters before any parts get replaced. As a general rule, the earlier a developing fault is checked, the more likely it is to be a straightforward, inexpensive fix rather than an emergency call-out for a fridge that''s stopped altogether.'
),
(
  'fridge-not-cooling-what-could-be-wrong',
  'Troubleshooting',
  'Fridge Not Cooling? Here''s What Could Be Wrong',
  'A warm fridge doesn''t always mean a dead compressor. We walk through the more common causes technicians check first, and why diagnosis comes before parts.',
  'A fridge that isn''t cooling properly is one of the most common reasons people search for a repair, and understandably the first assumption is often the worst-case one: a failed compressor or a refrigerant leak. In practice, those are usually further down the list. Most cooling complaints trace back to something simpler.

## Blocked or restricted airflow
Refrigerators rely on cold air circulating between the freezer and fridge compartments. If that path is blocked — by ice build-up, overpacked shelves, or a blocked vent — the fridge section can run warm even while the freezer stays cold. This is one of the more common causes of an uneven-cooling complaint and doesn''t involve the refrigeration system at all.

## Evaporator or condenser fan problems
Two fans typically do the work of moving air through a fridge: the evaporator fan distributes cold air through the cabinet, and (on many models) a condenser fan helps release heat from the system. If either fan has failed or is obstructed, cooling can drop off noticeably even though every other component is working correctly.

## A faulty temperature sensor or thermostat
The fridge''s controller relies on accurate temperature readings to decide when to run the compressor and fans. A sensor giving incorrect readings — or a worn mechanical thermostat — can mean the system genuinely believes the fridge is colder than it is, and cycles less often than it should.

## Defrost system faults
Modern fridges defrost the evaporator automatically on a schedule. If that system fails, frost can build up around the evaporator coil until it blocks airflow almost entirely — producing a fridge that feels warm despite the compressor still running.

## Compressor start components or electrical supply
When a compressor genuinely isn''t starting, the compressor itself isn''t always the faulty part — start relays, overload protectors and the power supply feeding the unit are all checked first, since a failure in any of them can look identical to a dead compressor from the outside.

## The sealed refrigeration system
This is the smallest category of cooling faults, but the one people worry about most. A genuine refrigerant leak or a failed compressor does happen, and usually shows up as weak, gradually worsening cooling rather than a sudden stop. Confirming this requires an actual inspection — it isn''t something that should be assumed from symptoms alone, since so many other faults present the same way.

## Why diagnosis comes first
The overlap between these causes is exactly why a proper inspection matters before any parts get replaced or a regas is booked. A fridge that isn''t cooling can be a five-minute airflow fix or a genuine refrigeration repair, and the only way to tell the difference is to have it actually checked.'
),
(
  'repair-or-replace-your-fridge',
  'Buying Guide',
  'Is It Time to Repair or Replace Your Fridge?',
  'Age isn''t the only factor. A look at how fault type, repair cost and appliance condition weigh into a sensible repair-or-replace decision.',
  'When a fridge develops a fault, the repair-or-replace question usually comes down to more than just how old the appliance is. A ten-year-old fridge with a straightforward door seal or fan issue can still be a sensible repair; a two-year-old fridge with a major sealed-system fault might not be. Here''s what''s actually worth weighing up.

## The type of fault
Not all faults cost the same to fix. Door seals, fan motors, thermostats and control boards are generally straightforward, moderately priced repairs. Sealed-system issues — a refrigerant leak or a failed compressor — sit at the other end, both in cost and in the work involved. The nature of the fault matters more than the appliance''s age on its own.

## Repair cost versus replacement cost
A useful rule of thumb (not a hard cutoff) is to compare the quoted repair cost against the cost of a similar replacement fridge. If a repair sits well below that figure, it''s usually worth doing regardless of the fridge''s age. If it starts approaching half the replacement cost or more, that''s when replacement becomes worth serious consideration — particularly for an older appliance.

## Age and condition together
Age matters most in combination with the fridge''s overall condition and repair history. A well-maintained fridge that''s never needed a repair is a different proposition to one that''s had two or three call-outs in as many years. Repeated faults, even minor ones, are often a sign that bigger components are wearing out.

## Parts availability
Older or discontinued models can be harder to source parts for, which affects both repair cost and how long a fix takes. If a part needs to be specially ordered or is no longer manufactured, that''s a practical factor worth asking about before committing to a repair.

## Energy efficiency
A fridge nearing the end of its life is often also nearing the end of its energy efficiency. Newer appliances can use meaningfully less power for the same capacity, so for an older fridge it''s worth weighing the running-cost difference alongside the upfront repair-versus-replace decision.

## Getting a diagnosis first
The most useful starting point is always an actual diagnosis rather than a guess based on symptoms or age. Once the fault and the likely repair cost are known, the decision usually becomes a lot clearer — and in plenty of cases, the fridge turns out to be well worth repairing.'
);
