CREATE DATABASE usuarios;

use usuarios;

create table usuarios_pagina(
    id int auto_increment primary key,
    nombre varchar(50) not null,
    email varchar(100) not null unique,
    password varchar(255) not null,
);
