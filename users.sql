BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);

INSERT INTO users (username, location) VALUES ('jdoe', 'San Francisco'), ('jsmith', 'New York'), ('abed', 'Florida');


COMMIT;
