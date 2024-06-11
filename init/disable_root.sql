ALTER USER 'root'@'localhost' IDENTIFIED BY 'invalid_password';
ALTER USER 'root'@'%' IDENTIFIED BY 'invalid_password';
FLUSH PRIVILEGES;