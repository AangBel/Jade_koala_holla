CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(50),
	"gender" varchar(1),
	"age" varchar (3),
	"ready_to_transfer" varchar(1),
	"notes" varchar (150)
	);
	

INSERT INTO "koalas" ( id, name, gender, age, ready_to_transfer, notes)
VALUES ('1', 'Scotty', 'M', '4','Y', 'Born in Guatemala');
INSERT INTO "koalas" ( id, name, gender, age, ready_to_transfer, notes)
VALUES	('2', 'Jean', 'F', '5', 'Y', 'Allergic to lots of lava'),
		('3', 'Ororo', 'F', '7', 'N', 'Loves listening to Paula (Abdul)'),
		('4', 'Logan', 'M', '15', 'N', 'Loves the sauna');		
INSERT INTO "koalas" ( id, name, gender, age, ready_to_transfer, notes)
VALUES ('5', 'Charlie', 'M', '9', 'Y', 'Favorite band is Nirvana'),
		('6', 'Betsy', 'F', '4', 'Y', 'Has a pet iguana');

