-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb_ASOGASMON
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb_ASOGASMON
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb_ASOGASMON` DEFAULT CHARACTER SET utf8 ;
USE `mydb_ASOGASMON` ;

-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`USUARIO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`USUARIO` (
  `ID` BIGINT NOT NULL,
  `NOMBRE` VARCHAR(45) NOT NULL,
  `APELLIDOS` VARCHAR(45) NOT NULL,
  `EMAIL` VARCHAR(45) NOT NULL,
  `CONTRASENIA` VARCHAR(25) NOT NULL,
  `FOTO` VARCHAR(45) NULL DEFAULT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  UNIQUE INDEX (`EMAIL` ASC) VISIBLE,
  PRIMARY KEY (`ID`));


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`CONVERSACION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`CONVERSACION` (
  `ID` BIGINT NOT NULL,
  `ID_USUARIO_RECEPTOR` INT NOT NULL,
  `USUARIO_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_CONVERSACION_USUARIO1` (`USUARIO_ID` ASC) VISIBLE,
  INDEX `fk_CONVERSACION_USUARIO_RECEPTOR1` (`ID_USUARIO_RECEPTOR` ASC) VISIBLE,
  CONSTRAINT `fk_CONVERSACION_USUARIO1`
    FOREIGN KEY (`USUARIO_ID`)
    REFERENCES `mydb_ASOGASMON`.`USUARIO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_CONVERSACION_USUARIO_RECEPTOR1`
    FOREIGN KEY (`ID_USUARIO_RECEPTOR`)
    REFERENCES `mydb_ASOGASMON`.`USUARIO` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`MENSAJE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`MENSAJE` (
  `ID` BIGINT NOT NULL,
  `MENSAJE` TEXT NULL DEFAULT NULL,
  `DIRECCION_MENSAJE` VARCHAR(10) NULL DEFAULT 'ENVIADO',
  `CONVERSACION_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_MENSAJE_CONVERSACION1` (`CONVERSACION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_MENSAJE_CONVERSACION1`
    FOREIGN KEY (`CONVERSACION_ID`)
    REFERENCES `mydb_ASOGASMON`.`CONVERSACION` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`CATEGORIA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`CATEGORIA` (
  `ID` BIGINT NOT NULL,
  `NOMBRE` VARCHAR(45) NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  UNIQUE INDEX (`NOMBRE` ASC) VISIBLE,
  PRIMARY KEY (`ID`));


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`SUB_CATEGORIA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`SUB_CATEGORIA` (
  `ID` BIGINT NOT NULL,
  `NOMBRE` VARCHAR(45) NOT NULL,
  `CATEGORIA_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  UNIQUE INDEX (`NOMBRE` ASC) VISIBLE,
  PRIMARY KEY (`ID`),
  INDEX `fk_SUB_CATEGORIA_CATEGORIA1` (`CATEGORIA_ID` ASC) VISIBLE,
  CONSTRAINT `fk_SUB_CATEGORIA_CATEGORIA1`
    FOREIGN KEY (`CATEGORIA_ID`)
    REFERENCES `mydb_ASOGASMON`.`CATEGORIA` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`OFERTA_ARTICULO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`OFERTA_ARTICULO` (
  `ID` BIGINT NOT NULL,
  `DESCRIPCION` TEXT NOT NULL,
  `PRECIO` INT NOT NULL,
  `NUMERO_CELULAR` BIGINT NOT NULL,
  `TITULO_AVISO` VARCHAR(70) NOT NULL,
  `USUARIO_ID` INT NOT NULL,
  `SUB_CATEGORIA_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_OFERTA_ARTICULO_USUARIO1` (`USUARIO_ID` ASC) VISIBLE,
  INDEX `fk_OFERTA_ARTICULO_SUB_CATEGORIA1` (`SUB_CATEGORIA_ID` ASC) VISIBLE,
  CONSTRAINT `fk_OFERTA_ARTICULO_USUARIO1`
    FOREIGN KEY (`USUARIO_ID`)
    REFERENCES `mydb_ASOGASMON`.`USUARIO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_OFERTA_ARTICULO_SUB_CATEGORIA1`
    FOREIGN KEY (`SUB_CATEGORIA_ID`)
    REFERENCES `mydb_ASOGASMON`.`SUB_CATEGORIA` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`UBICACION_OFERTA_ARTICULO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`UBICACION_OFERTA_ARTICULO` (
  `ID` BIGINT NOT NULL,
  `PAIS` VARCHAR(25) NOT NULL,
  `DEPARTAMENTO` VARCHAR(25) NOT NULL,
  `CIUDAD` VARCHAR(25) NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `OFERTA_ARTICULO_ID` BIGINT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_UBICACION_OFERTA_ARTICULO_OFERTA_ARTICULO1_idx` (`OFERTA_ARTICULO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_UBICACION_OFERTA_ARTICULO_OFERTA_ARTICULO1`
    FOREIGN KEY (`OFERTA_ARTICULO_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_ARTICULO` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`OFERTA_PENSION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`OFERTA_PENSION` (
  `ID` BIGINT NOT NULL,
  `HABITACIONES_DISPONIBLES` SMALLINT NOT NULL,
  `HABITACIONES_INDIVIDUALES` SMALLINT NOT NULL,
  `HABITACIONES_COMPARTIDAS` SMALLINT NOT NULL,
  `NUM_HABITANTES` SMALLINT NOT NULL,
  `HABITACIONES_BANIO_INTERNO` SMALLINT NOT NULL,
  `GENERO_ADMITIDO` VARCHAR(15) NOT NULL,
  `ALIMENTACION_INCLUIDA` TINYINT NOT NULL,
  `PRECIO_MENSUAL` INT NOT NULL,
  `NUM_CELULAR` BIGINT NOT NULL,
  `TITULO_AVISO` VARCHAR(70) NOT NULL,
  `DESCRIPCION_AVISO` TEXT NOT NULL,
  `USUARIO_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_OFERTA_PENSION_USUARIO1` (`USUARIO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_OFERTA_PENSION_USUARIO1`
    FOREIGN KEY (`USUARIO_ID`)
    REFERENCES `mydb_ASOGASMON`.`USUARIO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`UBICACION_OFERTA_PENSION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`UBICACION_OFERTA_PENSION` (
  `ID` BIGINT NOT NULL,
  `PAIS` VARCHAR(25) NOT NULL,
  `DEPARTAMENTO` VARCHAR(25) NOT NULL,
  `CIUDAD` VARCHAR(25) NOT NULL,
  `DIRECCION` VARCHAR(45) NOT NULL,
  `CODIGO_POSTAL` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `OFERTA_PENSION_ID` BIGINT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_UBICACION_OFERTA_PENSION_OFERTA_PENSION1_idx` (`OFERTA_PENSION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_UBICACION_OFERTA_PENSION_OFERTA_PENSION1`
    FOREIGN KEY (`OFERTA_PENSION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_PENSION` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`OFERTA_CASA_APTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`OFERTA_CASA_APTO` (
  `ID` BIGINT NOT NULL,
  `TIPO_INMUEBLE` VARCHAR(15) NOT NULL,
  `NUM_HABITACIONES` SMALLINT NOT NULL,
  `NUM_BANIOS` SMALLINT NOT NULL,
  `AREA_INMUEBLE` SMALLINT NOT NULL,
  `ESTANCIA_MINIMA` SMALLINT NOT NULL,
  `SERVICIOS_PRINCIPALES` TINYINT NOT NULL,
  `AMOBLADA` TINYINT NOT NULL,
  `PRECIO_MENSUAL` INT NOT NULL,
  `NUMERO_CELULAR` BIGINT NOT NULL,
  `DESCRIPCION` TEXT NOT NULL,
  `TITULO_AVISO` VARCHAR(70) NOT NULL,
  `USUARIO_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_OFERTA_CASA_APTO_USUARIO1` (`USUARIO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_OFERTA_CASA_APTO_USUARIO1`
    FOREIGN KEY (`USUARIO_ID`)
    REFERENCES `mydb_ASOGASMON`.`USUARIO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`UBICACION_OFERTA_CASA_APTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`UBICACION_OFERTA_CASA_APTO` (
  `ID` BIGINT NOT NULL,
  `PAIS` VARCHAR(25) NOT NULL,
  `DEPARTAMENTO` VARCHAR(25) NOT NULL,
  `CIUDAD` VARCHAR(25) NOT NULL,
  `DIRECCION` VARCHAR(45) NOT NULL,
  `CODIGO_POSTAL` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `OFERTA_CASA_APTO_ID` BIGINT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_UBICACION_OFERTA_CASA_APTO_OFERTA_CASA_APTO1_idx` (`OFERTA_CASA_APTO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_UBICACION_OFERTA_CASA_APTO_OFERTA_CASA_APTO1`
    FOREIGN KEY (`OFERTA_CASA_APTO_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_CASA_APTO` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`OFERTA_HABITACION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`OFERTA_HABITACION` (
  `ID` BIGINT NOT NULL,
  `AMOBLADA` TINYINT NOT NULL,
  `TIPO_HABITACION` VARCHAR(15) NOT NULL,
  `BANIO_INTERNO` TINYINT NOT NULL,
  `GENERO_ADMITIDO` VARCHAR(15) NOT NULL,
  `ALIMENTACION_INCLUIDA` TINYINT NOT NULL,
  `AREA_INMUEBLE` SMALLINT NOT NULL,
  `ESTANCIA_MINIMA` SMALLINT NOT NULL,
  `NUM_HABITANTES` SMALLINT NOT NULL,
  `NUMERO_CELULAR` BIGINT NOT NULL,
  `PRECIO_MENSUAL` INT NOT NULL,
  `TITULO_AVISO` VARCHAR(70) NOT NULL,
  `DESCRIPCION` TEXT NOT NULL,
  `USUARIO_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_OFERTA_HABITACION_USUARIO1` (`USUARIO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_OFERTA_HABITACION_USUARIO1`
    FOREIGN KEY (`USUARIO_ID`)
    REFERENCES `mydb_ASOGASMON`.`USUARIO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`UBICACION_OFERTA_HABITACION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`UBICACION_OFERTA_HABITACION` (
  `ID` BIGINT NOT NULL,
  `PAIS` VARCHAR(25) NOT NULL,
  `DEPARTAMENTO` VARCHAR(25) NOT NULL,
  `CIUDAD` VARCHAR(25) NOT NULL,
  `DIRECCION` VARCHAR(45) NOT NULL,
  `CODIGO_POSTAL` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `OFERTA_HABITACION_ID` BIGINT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_UBICACION_OFERTA_HABITACION_OFERTA_HABITACION1_idx` (`OFERTA_HABITACION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_UBICACION_OFERTA_HABITACION_OFERTA_HABITACION1`
    FOREIGN KEY (`OFERTA_HABITACION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_HABITACION` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`FOTO_ARTICULO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`FOTO_ARTICULO` (
  `ID` BIGINT NOT NULL,
  `FOTO` VARCHAR(45) NOT NULL,
  `OFERTA_ARTICULO_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_FOTO_ARTICULO_OFERTA_ARTICULO1` (`OFERTA_ARTICULO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_FOTO_ARTICULO_OFERTA_ARTICULO1`
    FOREIGN KEY (`OFERTA_ARTICULO_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_ARTICULO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO` (
  `ID` BIGINT NOT NULL,
  `SERVICIO` VARCHAR(20) NOT NULL,
  `ICONO` VARCHAR(45) NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  UNIQUE INDEX (`SERVICIO` ASC) VISIBLE,
  PRIMARY KEY (`ID`));


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`NORMA_CASA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`NORMA_CASA` (
  `ID` BIGINT NOT NULL,
  `NORMA` VARCHAR(30) NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  UNIQUE INDEX (`NORMA` ASC) VISIBLE,
  PRIMARY KEY (`ID`));


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`FOTO_PENSION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`FOTO_PENSION` (
  `ID` BIGINT NOT NULL,
  `FOTO` VARCHAR(45) NOT NULL,
  `OFERTA_PENSION_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_FOTO_PENSION_OFERTA_PENSION1` (`OFERTA_PENSION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_FOTO_PENSION_OFERTA_PENSION1`
    FOREIGN KEY (`OFERTA_PENSION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_PENSION` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`FOTO_CASA_APTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`FOTO_CASA_APTO` (
  `ID` BIGINT NOT NULL,
  `FOTO` VARCHAR(45) NOT NULL,
  `OFERTA_CASA_APTO_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_FOTO_CASA_APTO_OFERTA_CASA_APTO1` (`OFERTA_CASA_APTO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_FOTO_CASA_APTO_OFERTA_CASA_APTO1`
    FOREIGN KEY (`OFERTA_CASA_APTO_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_CASA_APTO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`FOTO_HABITACION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`FOTO_HABITACION` (
  `ID` BIGINT NOT NULL,
  `FOTO` VARCHAR(45) NOT NULL,
  `OFERTA_HABITACION_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_FOTO_HABITACION_OFERTA_HABITACION1` (`OFERTA_HABITACION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_FOTO_HABITACION_OFERTA_HABITACION1`
    FOREIGN KEY (`OFERTA_HABITACION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_HABITACION` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`NORMA_CASA_has_OFERTA_HABITACION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`NORMA_CASA_has_OFERTA_HABITACION` (
  `ID` BIGINT NOT NULL,
  `NORMA_CASA_ID` INT NOT NULL,
  `OFERTA_HABITACION_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_NORMA_CASA_has_OFERTA_HABITACION_NORMA_CASA1` (`NORMA_CASA_ID` ASC) VISIBLE,
  INDEX `fk_NORMA_CASA_has_OFERTA_HABITACION_OFERTA_HABITACION1` (`OFERTA_HABITACION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_NORMA_CASA_has_OFERTA_HABITACION_NORMA_CASA1`
    FOREIGN KEY (`NORMA_CASA_ID`)
    REFERENCES `mydb_ASOGASMON`.`NORMA_CASA` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_NORMA_CASA_has_OFERTA_HABITACION_OFERTA_HABITACION1`
    FOREIGN KEY (`OFERTA_HABITACION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_HABITACION` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`NORMA_CASA_has_OFERTA_PENSION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`NORMA_CASA_has_OFERTA_PENSION` (
  `ID` BIGINT NOT NULL,
  `NORMA_CASA_ID` INT NOT NULL,
  `OFERTA_PENSION_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_NORMA_CASA_has_OFERTA_PENSION_NORMA_CASA1` (`NORMA_CASA_ID` ASC) VISIBLE,
  INDEX `fk_NORMA_CASA_has_OFERTA_PENSION_OFERTA_PENSION1` (`OFERTA_PENSION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_NORMA_CASA_has_OFERTA_PENSION_NORMA_CASA1`
    FOREIGN KEY (`NORMA_CASA_ID`)
    REFERENCES `mydb_ASOGASMON`.`NORMA_CASA` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_NORMA_CASA_has_OFERTA_PENSION_OFERTA_PENSION1`
    FOREIGN KEY (`OFERTA_PENSION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_PENSION` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO_has_OFERTA_PENSION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO_has_OFERTA_PENSION` (
  `ID` BIGINT NOT NULL,
  `SERVICIO_ESPECIFICO_ID` INT NOT NULL,
  `OFERTA_PENSION_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_SERVICIO_ESPE1` (`SERVICIO_ESPECIFICO_ID` ASC) VISIBLE,
  INDEX `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_OFERTA_PENSIO1` (`OFERTA_PENSION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_SERVICIO_ESPE1`
    FOREIGN KEY (`SERVICIO_ESPECIFICO_ID`)
    REFERENCES `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_OFERTA_PENSIO1`
    FOREIGN KEY (`OFERTA_PENSION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_PENSION` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO_has_OFERTA_HABITACION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO_has_OFERTA_HABITACION` (
  `ID` BIGINT NOT NULL,
  `SERVICIO_ESPECIFICO_ID` INT NOT NULL,
  `OFERTA_HABITACION_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_SERVICIO_E1` (`SERVICIO_ESPECIFICO_ID` ASC) VISIBLE,
  INDEX `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_OFERTA_HAB1` (`OFERTA_HABITACION_ID` ASC) VISIBLE,
  CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_SERVICIO_E1`
    FOREIGN KEY (`SERVICIO_ESPECIFICO_ID`)
    REFERENCES `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_OFERTA_HAB1`
    FOREIGN KEY (`OFERTA_HABITACION_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_HABITACION` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO` (
  `ID` BIGINT NOT NULL,
  `SERVICIO_ESPECIFICO_ID` INT NOT NULL,
  `OFERTA_CASA_APTO_ID` INT NOT NULL,
  `CREADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `ACTUALIZADO_EN` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`ID`),
  INDEX `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_SERVICIO_ESPE1` (`SERVICIO_ESPECIFICO_ID` ASC) VISIBLE,
  INDEX `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_OFERTA_CASA_A1` (`OFERTA_CASA_APTO_ID` ASC) VISIBLE,
  CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_SERVICIO_ESPE1`
    FOREIGN KEY (`SERVICIO_ESPECIFICO_ID`)
    REFERENCES `mydb_ASOGASMON`.`SERVICIO_ESPECIFICO` (`ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_OFERTA_CASA_A1`
    FOREIGN KEY (`OFERTA_CASA_APTO_ID`)
    REFERENCES `mydb_ASOGASMON`.`OFERTA_CASA_APTO` (`ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;