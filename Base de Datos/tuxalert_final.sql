/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100131
 Source Host           : localhost:3306
 Source Schema         : tuxalert_final

 Target Server Type    : MySQL
 Target Server Version : 100131
 File Encoding         : 65001

 Date: 14/04/2018 11:08:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for alertas
-- ----------------------------
DROP TABLE IF EXISTS `alertas`;
CREATE TABLE `alertas`  (
  `ID_Alerta` int(255) NOT NULL,
  `Fecha` date NULL DEFAULT NULL,
  `Hora` varbinary(255) NULL DEFAULT NULL,
  `Latitud` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Longitud` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID_Alerta`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for keys
-- ----------------------------
DROP TABLE IF EXISTS `keys`;
CREATE TABLE `keys`  (
  `id_key` int(255) NOT NULL,
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `estado` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `ID_Usuario` int(255) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Apellidos` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Correo_electronico` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Fecha_nacimiento` date NULL DEFAULT NULL,
  `Telefono` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Contrasenia` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Genero` enum('masculino','femenino','otro') CHARACTER SET utf8 COLLATE utf8_spanish2_ci NULL DEFAULT NULL,
  `Borrado` int(1) NULL DEFAULT NULL,
  `ID_TipoUsuario` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID_Usuario`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish2_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
