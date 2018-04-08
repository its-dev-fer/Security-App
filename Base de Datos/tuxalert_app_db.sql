<<<<<<< HEAD
/*
Navicat MySQL Data Transfer

Source Server         : db
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : tuxalert

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-04-08 00:00:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `alertas`
-- ----------------------------
DROP TABLE IF EXISTS `alertas`;
CREATE TABLE `alertas` (
`ID_Alerta`  int(255) NOT NULL AUTO_INCREMENT ,
`ID_CategoriaAlerta`  int(255) NULL DEFAULT NULL ,
`ID_UbicacionAlerta`  int(255) NULL DEFAULT NULL ,
`Fecha`  date NULL DEFAULT NULL ,
`Hora`  time NULL DEFAULT NULL ,
PRIMARY KEY (`ID_Alerta`),
FOREIGN KEY (`ID_Alerta`) REFERENCES `usuarios` (`ID_Alerta`) ON DELETE NO ACTION ON UPDATE CASCADE,
INDEX `Indice_Fecha` (`Fecha`) USING BTREE ,
INDEX `Indice_Hora` (`Hora`) USING BTREE ,
INDEX `Foranea_ID_CategoriaAlerta` (`ID_CategoriaAlerta`) USING BTREE ,
INDEX `Foranea_ID_UbicacionAlerta` (`ID_UbicacionAlerta`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_spanish2_ci
AUTO_INCREMENT=1

;

-- ----------------------------
-- Records of alertas
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for `categoriasalertas`
-- ----------------------------
DROP TABLE IF EXISTS `categoriasalertas`;
CREATE TABLE `categoriasalertas` (
`ID_CategoriaAlerta`  int(255) NOT NULL AUTO_INCREMENT ,
`Nombre_Categoria`  varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
PRIMARY KEY (`ID_CategoriaAlerta`),
FOREIGN KEY (`ID_CategoriaAlerta`) REFERENCES `alertas` (`ID_CategoriaAlerta`) ON DELETE NO ACTION ON UPDATE CASCADE,
INDEX `Indice_Nombre_Categoria` (`Nombre_Categoria`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_spanish2_ci
AUTO_INCREMENT=1

;

-- ----------------------------
-- Records of categoriasalertas
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for `tipousuarios`
-- ----------------------------
DROP TABLE IF EXISTS `tipousuarios`;
CREATE TABLE `tipousuarios` (
`ID_TipoUsuario`  int(255) NOT NULL AUTO_INCREMENT ,
`Nombre_Tipo_Usuario`  varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
PRIMARY KEY (`ID_TipoUsuario`),
FOREIGN KEY (`ID_TipoUsuario`) REFERENCES `usuarios` (`ID_TipoUsuario`) ON DELETE NO ACTION ON UPDATE CASCADE,
INDEX `Indice_Nombre_Tipo_Usuario` (`Nombre_Tipo_Usuario`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_spanish2_ci
AUTO_INCREMENT=1

;

-- ----------------------------
-- Records of tipousuarios
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for `ubicacionesalertas`
-- ----------------------------
DROP TABLE IF EXISTS `ubicacionesalertas`;
CREATE TABLE `ubicacionesalertas` (
`ID_UbicacionAlerta`  int(255) NOT NULL AUTO_INCREMENT ,
`Latitud`  varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Longitud`  varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Pais`  varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Estado`  varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Municipio`  varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`URL`  varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
PRIMARY KEY (`ID_UbicacionAlerta`),
FOREIGN KEY (`ID_UbicacionAlerta`) REFERENCES `alertas` (`ID_UbicacionAlerta`) ON DELETE NO ACTION ON UPDATE CASCADE,
INDEX `Indice_Municipio` (`Municipio`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_spanish2_ci
AUTO_INCREMENT=1

;

-- ----------------------------
-- Records of ubicacionesalertas
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for `usuarios`
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
`ID_Usuario`  int(255) NOT NULL AUTO_INCREMENT ,
`Nombre`  varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Apellidos`  varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Correo_electronico`  varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Fecha_nacimiento`  date NULL DEFAULT NULL ,
`Telefono`  varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Contrasenia`  varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Genero`  enum('masculino','femenino','otro') CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL ,
`Borrado`  int(1) NULL DEFAULT NULL ,
`Ultima_Sesion`  timestamp(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP ,
`ID_TipoUsuario`  int(255) NULL DEFAULT NULL ,
`ID_Alerta`  int(255) NULL DEFAULT NULL ,
PRIMARY KEY (`ID_Usuario`),
INDEX `Indice_Nombre` (`Nombre`) USING BTREE ,
INDEX `Indice_Apellidos` (`Apellidos`) USING BTREE ,
INDEX `Indice_Fecha_Nacimiento` (`Fecha_nacimiento`) USING BTREE ,
INDEX `Indice_Ultima_Sesion` (`Ultima_Sesion`) USING BTREE ,
INDEX `ID_Alerta` (`ID_Alerta`) USING BTREE ,
INDEX `ID_TipoUsuario` (`ID_TipoUsuario`) USING BTREE 
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_spanish2_ci
AUTO_INCREMENT=8

;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Auto increment value for `alertas`
-- ----------------------------
ALTER TABLE `alertas` AUTO_INCREMENT=1;

-- ----------------------------
-- Auto increment value for `categoriasalertas`
-- ----------------------------
ALTER TABLE `categoriasalertas` AUTO_INCREMENT=1;

-- ----------------------------
-- Auto increment value for `tipousuarios`
-- ----------------------------
ALTER TABLE `tipousuarios` AUTO_INCREMENT=1;

-- ----------------------------
-- Auto increment value for `ubicacionesalertas`
-- ----------------------------
ALTER TABLE `ubicacionesalertas` AUTO_INCREMENT=1;

-- ----------------------------
-- Auto increment value for `usuarios`
-- ----------------------------
ALTER TABLE `usuarios` AUTO_INCREMENT=8;
=======
/*
 Navicat Premium Data Transfer

 Source Server         : Nomada
 Source Server Type    : MySQL
 Source Server Version : 100131
 Source Host           : localhost:3306
 Source Schema         : tuxalert_app_db

 Target Server Type    : MySQL
 Target Server Version : 100131
 File Encoding         : 65001

 Date: 08/04/2018 12:53:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for alertas
-- ----------------------------
DROP TABLE IF EXISTS `alertas`;
CREATE TABLE `alertas`  (
  `ID_Alerta` int(255) NOT NULL AUTO_INCREMENT,
  `ID_CategoriaAlerta` int(255) NULL DEFAULT NULL,
  `ID_UbicacionAlerta` int(255) NULL DEFAULT NULL,
  `Fecha` date NULL DEFAULT NULL,
  `Hora` time(6) NULL DEFAULT NULL,
  PRIMARY KEY (`ID_Alerta`) USING BTREE,
  INDEX `Indice_Fecha`(`Fecha`) USING BTREE,
  INDEX `Indice_Hora`(`Hora`) USING BTREE,
  INDEX `Foranea_ID_CategoriaAlerta`(`ID_CategoriaAlerta`) USING BTREE,
  INDEX `Foranea_ID_UbicacionAlerta`(`ID_UbicacionAlerta`) USING BTREE,
  CONSTRAINT `Foranea_ID_Alerta` FOREIGN KEY (`ID_Alerta`) REFERENCES `usuarios` (`ID_Alerta`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for categoriasalertas
-- ----------------------------
DROP TABLE IF EXISTS `categoriasalertas`;
CREATE TABLE `categoriasalertas`  (
  `ID_CategoriaAlerta` int(255) NOT NULL AUTO_INCREMENT,
  `Nombre_Categoria` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID_CategoriaAlerta`) USING BTREE,
  INDEX `Indice_Nombre_Categoria`(`Nombre_Categoria`) USING BTREE,
  CONSTRAINT `Foranea_ID_CategoriaAlerta` FOREIGN KEY (`ID_CategoriaAlerta`) REFERENCES `alertas` (`ID_CategoriaAlerta`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for keys
-- ----------------------------
DROP TABLE IF EXISTS `keys`;
CREATE TABLE `keys`  (
  `id_key` int(255) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `estado` int(1) NOT NULL,
  PRIMARY KEY (`id_key`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for tipousuarios
-- ----------------------------
DROP TABLE IF EXISTS `tipousuarios`;
CREATE TABLE `tipousuarios`  (
  `ID_TipoUsuario` int(255) NOT NULL AUTO_INCREMENT,
  `Nombre_Tipo_Usuario` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID_TipoUsuario`) USING BTREE,
  INDEX `Indice_Nombre_Tipo_Usuario`(`Nombre_Tipo_Usuario`) USING BTREE,
  CONSTRAINT `Foranea_ID_TipoUsuario` FOREIGN KEY (`ID_TipoUsuario`) REFERENCES `usuarios` (`ID_TipoUsuario`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for ubicacionesalertas
-- ----------------------------
DROP TABLE IF EXISTS `ubicacionesalertas`;
CREATE TABLE `ubicacionesalertas`  (
  `ID_UbicacionAlerta` int(255) NOT NULL AUTO_INCREMENT,
  `Latitud` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Longitud` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Pais` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Estado` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Municipio` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `URL` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID_UbicacionAlerta`) USING BTREE,
  INDEX `Indice_Municipio`(`Municipio`) USING BTREE,
  CONSTRAINT `Foranea_ID_UbicacionAlerta` FOREIGN KEY (`ID_UbicacionAlerta`) REFERENCES `alertas` (`ID_UbicacionAlerta`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `ID_Usuario` int(255) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Apellidos` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Correo_electronico` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Fecha_nacimiento` date NULL DEFAULT NULL,
  `Telefono` int(15) NULL DEFAULT NULL,
  `Contrasenia` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Genero` enum('masculino','femenino','otro') CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Borrado` int(1) NULL DEFAULT NULL,
  `Ultima_Sesion` timestamp(6) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6),
  `ID_TipoUsuario` int(255) NULL DEFAULT NULL,
  `ID_Alerta` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID_Usuario`) USING BTREE,
  INDEX `Indice_Nombre`(`Nombre`) USING BTREE,
  INDEX `Indice_Apellidos`(`Apellidos`) USING BTREE,
  INDEX `Indice_Fecha_Nacimiento`(`Fecha_nacimiento`) USING BTREE,
  INDEX `Indice_Ultima_Sesion`(`Ultima_Sesion`) USING BTREE,
  INDEX `ID_Alerta`(`ID_Alerta`) USING BTREE,
  INDEX `ID_TipoUsuario`(`ID_TipoUsuario`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
>>>>>>> b698b155705d4f25a3e08e6288f3c10c386e07a0
