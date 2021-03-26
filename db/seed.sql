CREATE TABLE helo_users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
profile_pic TEXT
)

CREATE TABLE helo_posts (
post_id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
content TEXT,
img TEXT,
author_id INT REFERENCES helo_users(user_id),
date_created TIMESTAMP
)