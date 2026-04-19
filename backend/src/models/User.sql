CREATE DATABASE login_app;
USE login_app;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_changed TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- INSERT INTO users (name, email, password)
-- VALUES
-- ('Jonathan', 'jonathan@gmail.com', 'jonathan123'),
-- ('Pedro', 'pedro@gmail.com', 'pedro123');

-- UPDATE users
-- SET email = 'jonathan2@gmail.com'
-- WHERE id = 1;