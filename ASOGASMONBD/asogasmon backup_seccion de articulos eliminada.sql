-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2020 a las 03:48:59
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `asogasmon`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto_casa_apto`
--

CREATE TABLE `foto_casa_apto` (
  `ID` int(11) NOT NULL,
  `FOTO` varchar(45) COLLATE utf8_bin NOT NULL,
  `OFERTA_CASA_APTO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `foto_casa_apto`
--

INSERT INTO `foto_casa_apto` (`ID`, `FOTO`, `OFERTA_CASA_APTO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(5, 'nsahlog4mw.webp', 5, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(6, '24ro4xp85r.webp', 5, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(7, 'ob8ldnlmny.webp', 5, '2019-11-08 20:18:37', '2019-11-08 20:18:37'),
(8, 'zdbun9ndx3.webp', 6, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(9, 'qdf9lhuvx8.webp', 6, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(10, 'j8ryrl67jq.webp', 6, '2019-11-08 21:08:57', '2019-11-08 21:08:57'),
(11, '5vcs94rhp9.webp', 7, '2019-11-18 23:32:41', '2019-11-18 23:32:41'),
(12, 'i7shbjdre9.webp', 7, '2019-11-18 23:32:42', '2019-11-18 23:32:42'),
(13, '4793g3c3xe.webp', 7, '2019-11-18 23:32:42', '2019-11-18 23:32:42'),
(14, 'bo5ik18nd1.webp', 7, '2019-11-18 23:32:43', '2019-11-18 23:32:43'),
(15, 'tp7si5vg48.webp', 7, '2019-11-18 23:32:43', '2019-11-18 23:32:43'),
(16, 'rsbvt6nq7z.webp', 7, '2019-11-18 23:32:43', '2019-11-18 23:32:43'),
(17, '4470sv5n0s.webp', 7, '2019-11-18 23:32:43', '2019-11-18 23:32:43'),
(18, 'h6jzc1ibvu.webp', 8, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(19, 'adt7rdh6w6.webp', 9, '2019-11-18 23:40:36', '2019-11-18 23:40:36'),
(20, 's7dc6nysaw.webp', 9, '2019-11-18 23:40:36', '2019-11-18 23:40:36'),
(21, 'hmqpyy55ee.webp', 9, '2019-11-18 23:40:36', '2019-11-18 23:40:36'),
(22, 'vy0lcfxevi.webp', 10, '2019-11-25 17:30:51', '2019-11-25 17:30:51'),
(23, 'u3oaf6kmqk.webp', 44, '2019-12-02 18:50:35', '2019-12-02 18:50:35'),
(24, '77y32gs1zk.webp', 45, '2019-12-18 15:29:00', '2019-12-18 15:29:00'),
(25, 'og29yokgd7.webp', 45, '2019-12-18 15:29:00', '2019-12-18 15:29:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto_habitacion`
--

CREATE TABLE `foto_habitacion` (
  `ID` int(11) NOT NULL,
  `FOTO` varchar(45) COLLATE utf8_bin NOT NULL,
  `OFERTA_HABITACION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `foto_habitacion`
--

INSERT INTO `foto_habitacion` (`ID`, `FOTO`, `OFERTA_HABITACION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(7, 'dby5sja8e5.webp', 11, '2019-11-23 04:13:38', '2019-11-23 04:13:38'),
(8, '5a4s39dqg3.webp', 11, '2019-11-23 04:13:39', '2019-11-23 04:13:39'),
(9, '5pt3kbvl4j.webp', 12, '2019-11-27 16:44:13', '2019-11-27 16:44:13'),
(10, 'gf9cbeix7q.webp', 13, '2019-11-27 16:52:08', '2019-11-27 16:52:08'),
(11, 'psj8y1y1gt.webp', 14, '2019-12-02 19:02:08', '2019-12-02 19:02:08'),
(12, 'pqjfawt4qr.webp', 15, '2019-12-18 15:53:07', '2019-12-18 15:53:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto_pension`
--

CREATE TABLE `foto_pension` (
  `ID` int(11) NOT NULL,
  `FOTO` varchar(45) COLLATE utf8_bin NOT NULL,
  `OFERTA_PENSION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `foto_pension`
--

INSERT INTO `foto_pension` (`ID`, `FOTO`, `OFERTA_PENSION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(7, 'dcddlh48eg.webp', 7, '2019-11-27 20:19:25', '2019-11-27 20:19:25'),
(8, 'jm7qcrha5c.webp', 7, '2019-11-27 20:19:25', '2019-11-27 20:19:25'),
(9, 'jxbf23gjt5.webp', 8, '2019-11-27 23:35:08', '2019-11-27 23:35:08'),
(10, '9sjvf388wm.webp', 8, '2019-11-27 23:35:09', '2019-11-27 23:35:09'),
(11, '2jw4ku6t4k.webp', 9, '2019-11-27 23:41:11', '2019-11-27 23:41:11'),
(12, 'jgesmzkax2.webp', 9, '2019-11-27 23:41:11', '2019-11-27 23:41:11'),
(13, 'yqtd9yf0iu.webp', 10, '2019-11-27 23:42:31', '2019-11-27 23:42:31'),
(14, 'cm1wbfsvbe.webp', 10, '2019-11-27 23:42:32', '2019-11-27 23:42:32'),
(15, 'a7p4x7ver0.webp', 13, '2019-12-02 19:11:40', '2019-12-02 19:11:40'),
(16, 'nvswubpsyd.webp', 14, '2019-12-18 16:00:02', '2019-12-18 16:00:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `norma_casa`
--

CREATE TABLE `norma_casa` (
  `ID` int(11) NOT NULL,
  `NORMA` varchar(30) COLLATE utf8_bin NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `norma_casa`
--

INSERT INTO `norma_casa` (`ID`, `NORMA`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'SE PERMITEN MASCOTAS', '2019-11-23 03:52:42', '2019-11-23 03:52:42'),
(2, 'SE PERMITEN VISITAS', '2019-11-23 03:52:42', '2019-11-23 03:52:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `norma_casa_has_oferta_habitacion`
--

CREATE TABLE `norma_casa_has_oferta_habitacion` (
  `ID` int(11) NOT NULL,
  `NORMA_CASA_ID` int(11) NOT NULL,
  `OFERTA_HABITACION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `norma_casa_has_oferta_habitacion`
--

INSERT INTO `norma_casa_has_oferta_habitacion` (`ID`, `NORMA_CASA_ID`, `OFERTA_HABITACION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(5, 2, 11, '2019-11-23 04:13:39', '2019-11-23 04:13:39'),
(6, 1, 11, '2019-11-23 04:13:39', '2019-11-23 04:13:39'),
(7, 2, 12, '2019-11-27 16:44:13', '2019-11-27 16:44:13'),
(8, 1, 13, '2019-11-27 16:52:08', '2019-11-27 16:52:08'),
(9, 2, 13, '2019-11-27 16:52:08', '2019-11-27 16:52:08'),
(10, 1, 14, '2019-12-02 19:02:08', '2019-12-02 19:02:08'),
(11, 2, 14, '2019-12-02 19:02:08', '2019-12-02 19:02:08'),
(12, 2, 15, '2019-12-18 15:53:07', '2019-12-18 15:53:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `norma_casa_has_oferta_pension`
--

CREATE TABLE `norma_casa_has_oferta_pension` (
  `ID` int(11) NOT NULL,
  `NORMA_CASA_ID` int(11) NOT NULL,
  `OFERTA_PENSION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `norma_casa_has_oferta_pension`
--

INSERT INTO `norma_casa_has_oferta_pension` (`ID`, `NORMA_CASA_ID`, `OFERTA_PENSION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 2, 7, '2019-11-27 20:19:25', '2019-11-27 20:19:25'),
(2, 1, 8, '2019-11-27 23:35:09', '2019-11-27 23:35:09'),
(3, 2, 8, '2019-11-27 23:35:09', '2019-11-27 23:35:09'),
(4, 1, 9, '2019-11-27 23:41:12', '2019-11-27 23:41:12'),
(5, 2, 9, '2019-11-27 23:41:12', '2019-11-27 23:41:12'),
(6, 1, 10, '2019-11-27 23:42:32', '2019-11-27 23:42:32'),
(7, 2, 10, '2019-11-27 23:42:32', '2019-11-27 23:42:32'),
(8, 1, 13, '2019-12-02 19:11:41', '2019-12-02 19:11:41'),
(9, 2, 13, '2019-12-02 19:11:41', '2019-12-02 19:11:41'),
(10, 2, 14, '2019-12-18 16:00:02', '2019-12-18 16:00:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta_casa_apto`
--

CREATE TABLE `oferta_casa_apto` (
  `ID` int(11) NOT NULL,
  `TIPO_INMUEBLE` varchar(15) COLLATE utf8_bin NOT NULL,
  `NUM_HABITACIONES` smallint(6) NOT NULL,
  `NUM_BANIOS` smallint(6) NOT NULL,
  `AREA_INMUEBLE` smallint(6) NOT NULL,
  `ESTANCIA_MINIMA` smallint(6) NOT NULL,
  `SERVICIOS_PRINCIPALES` tinyint(1) NOT NULL,
  `AMOBLADA` tinyint(1) NOT NULL,
  `PRECIO_MENSUAL` int(11) NOT NULL,
  `NUMERO_CELULAR` bigint(20) NOT NULL,
  `DESCRIPCION` text COLLATE utf8_bin NOT NULL,
  `TITULO_AVISO` varchar(70) COLLATE utf8_bin NOT NULL,
  `USUARIO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `oferta_casa_apto`
--

INSERT INTO `oferta_casa_apto` (`ID`, `TIPO_INMUEBLE`, `NUM_HABITACIONES`, `NUM_BANIOS`, `AREA_INMUEBLE`, `ESTANCIA_MINIMA`, `SERVICIOS_PRINCIPALES`, `AMOBLADA`, `PRECIO_MENSUAL`, `NUMERO_CELULAR`, `DESCRIPCION`, `TITULO_AVISO`, `USUARIO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(5, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(6, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(7, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(8, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'fasdf asfdf safsfs fdfsdf sfs fsd', 'apartamento en arriedno', 1, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(9, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'jkhdsifuf sdfpsfpsfaspdifhugdil bff fsdui gfsd fyufg v bvcxl v f nbvpied h bhvkh vsfd vuy gscfd ds', 'pequeña casa en arriendo', 1, '2019-11-18 23:40:35', '2019-11-18 23:40:35'),
(10, 'APARTAMENTO', 1, 1, 50, 3, 1, 0, 450000, 2465564654, 'hjfkds fjds fs kffsdñjf ksdljifsblfsdf', 'pequeña casa en arriendo', 1, '2019-11-25 17:30:50', '2019-11-25 17:30:50'),
(11, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(12, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(13, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(14, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(15, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(16, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'fasdf asfdf safsfs fdfsdf sfs fsd', 'apartamento en arriedno', 1, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(17, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'jkhdsifuf sdfpsfpsfaspdifhugdil bff fsdui gfsd fyufg v bvcxl v f nbvpied h bhvkh vsfd vuy gscfd ds', 'pequeña casa en arriendo', 1, '2019-11-18 23:40:35', '2019-11-18 23:40:35'),
(18, 'APARTAMENTO', 1, 1, 50, 3, 1, 0, 450000, 2465564654, 'hjfkds fjds fs kffsdñjf ksdljifsblfsdf', 'pequeña casa en arriendo', 1, '2019-11-25 17:30:50', '2019-11-25 17:30:50'),
(19, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(20, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(21, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(22, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(23, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(24, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'fasdf asfdf safsfs fdfsdf sfs fsd', 'apartamento en arriedno', 1, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(25, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(26, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(27, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(28, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(29, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'fasdf asfdf safsfs fdfsdf sfs fsd', 'apartamento en arriedno', 1, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(30, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(31, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(32, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'fasdf asfdf safsfs fdfsdf sfs fsd', 'apartamento en arriedno', 1, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(33, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'jkhdsifuf sdfpsfpsfaspdifhugdil bff fsdui gfsd fyufg v bvcxl v f nbvpied h bhvkh vsfd vuy gscfd ds', 'pequeña casa en arriendo', 1, '2019-11-18 23:40:35', '2019-11-18 23:40:35'),
(34, 'APARTAMENTO', 1, 1, 50, 3, 1, 0, 450000, 2465564654, 'hjfkds fjds fs kffsdñjf ksdljifsblfsdf', 'pequeña casa en arriendo', 1, '2019-11-25 17:30:50', '2019-11-25 17:30:50'),
(35, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(36, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(37, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(38, 'APARTAMENTO', 2, 1, 70, 0, 0, 1, 450000, 3162024789, 'fasdf asfdf safsfs fdfsdf sfs fsd', 'apartamento en arriedno', 1, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(39, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
(40, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(41, 'CASA', 4, 1, 60, 6, 0, 0, 650000, 3124567890, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 'Casa en arriendo', 1, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(42, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-28 21:58:00'),
(43, 'CASA', 3, 1, 70, 3, 0, 0, 450000, 3162024789, 'fadsfs fkjujsdfa sf fjksdh fsdf sdjf sdfds fdsjuhf sdfiusdfhi oifdsfdsikfds fbdsfil uf7rerjewbir werqwe rij cxkmvfas gmnm', 'Casa en arriendo, tamaño familiar', 1, '2019-11-18 23:32:40', '2019-11-28 21:58:00'),
(44, 'APARTAMENTO', 1, 1, 50, 0, 0, 0, 450000, 2465564654, 'df dsjukf dsuifdsaufsfi8sf fsdyfgdf bdfy vfdv97fyfdsfsd fsf', 'apartamento en arriedno', 1, '2019-12-02 18:50:34', '2019-12-02 18:50:34'),
(45, 'CASA', 3, 1, 50, 0, 0, 0, 600000, 3162024789, 'Casa en arriendo en buen sector, cerca a la avenida de olaya', 'pequeña casa en arriendo', 9, '2019-12-18 15:28:59', '2019-12-18 15:28:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta_habitacion`
--

CREATE TABLE `oferta_habitacion` (
  `ID` int(11) NOT NULL,
  `AMOBLADA` tinyint(1) NOT NULL,
  `TIPO_HABITACION` varchar(15) COLLATE utf8_bin NOT NULL,
  `BANIO_INTERNO` tinyint(1) NOT NULL,
  `GENERO_ADMITIDO` varchar(15) COLLATE utf8_bin NOT NULL,
  `ALIMENTACION_INCLUIDA` tinyint(1) NOT NULL,
  `AREA_INMUEBLE` smallint(6) NOT NULL,
  `ESTANCIA_MINIMA` smallint(6) NOT NULL,
  `NUM_HABITANTES` smallint(6) NOT NULL,
  `NUMERO_CELULAR` bigint(20) NOT NULL,
  `PRECIO_MENSUAL` int(11) NOT NULL,
  `TITULO_AVISO` varchar(70) COLLATE utf8_bin NOT NULL,
  `DESCRIPCION` text COLLATE utf8_bin NOT NULL,
  `USUARIO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `oferta_habitacion`
--

INSERT INTO `oferta_habitacion` (`ID`, `AMOBLADA`, `TIPO_HABITACION`, `BANIO_INTERNO`, `GENERO_ADMITIDO`, `ALIMENTACION_INCLUIDA`, `AREA_INMUEBLE`, `ESTANCIA_MINIMA`, `NUM_HABITANTES`, `NUMERO_CELULAR`, `PRECIO_MENSUAL`, `TITULO_AVISO`, `DESCRIPCION`, `USUARIO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(11, 1, 'COMPARTIDA', 0, 'TODOS', 1, 15, 3, 5, 3254896235, 500000, 'Habitacion compartida en arriendo', 'Habitacion en arriendo, amoblada, en zona residencial, con parqueadero y vigilancia', 1, '2019-11-23 04:13:38', '2019-11-23 04:13:38'),
(12, 1, 'COMPARTIDA', 0, 'HOMBRES', 1, 20, 3, 5, 3162024789, 450000, 'Habitacion en arriendo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 1, '2019-11-27 16:44:11', '2019-11-27 16:44:11'),
(13, 1, 'INDIVIDUAL', 0, 'MUJERES', 1, 20, 0, 1, 2465564654, 450000, 'dfsa dsf as asfsadf dsfjsd fsdfdsfsfdkds ffdsfsdfdsf', '//variables por defecto para publicar articulo nuevo\n  resetVariables() {\n    this.ofertaNueva = {\n      PRECIO_MENSUAL: 0,\n      DESCRIPCION: \"\",\n      TITULO_AVISO: \"\",\n      FOTOS: [],\n      ...this.ofertaNueva\n    }\n\n    this.datosIncorrectos = false;\n    this.imagenPrincipalAgregada = false;', 1, '2019-11-27 16:52:07', '2019-11-27 16:52:07'),
(14, 1, 'INDIVIDUAL', 1, 'MUJERES', 1, 20, 0, 1, 3162024789, 450000, 'habitacion en arriendo', 'fadsfsdf sdflkiuh fds n fdiol ujsfd kfljdsbdfl.k gfdh dfgbhño gffdg', 1, '2019-12-02 19:02:07', '2019-12-02 19:02:07'),
(15, 1, 'INDIVIDUAL', 0, 'TODOS', 0, 20, 0, 1, 2465564654, 450000, 'habitacion en arriendo', 'Habitacion en arriendo en la calle central de montecristo', 9, '2019-12-18 15:53:06', '2019-12-18 15:53:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta_pension`
--

CREATE TABLE `oferta_pension` (
  `ID` int(11) NOT NULL,
  `HABITACIONES_DISPONIBLES` smallint(6) NOT NULL,
  `HABITACIONES_INDIVIDUALES` smallint(6) NOT NULL,
  `HABITACIONES_COMPARTIDAS` smallint(6) NOT NULL,
  `NUM_HABITANTES` smallint(6) NOT NULL,
  `HABITACIONES_BANIO_INTERNO` smallint(6) NOT NULL,
  `GENERO_ADMITIDO` varchar(15) COLLATE utf8_bin NOT NULL,
  `ALIMENTACION_INCLUIDA` tinyint(1) NOT NULL,
  `PRECIO_MENSUAL` int(11) NOT NULL,
  `NUM_CELULAR` bigint(20) NOT NULL,
  `TITULO_AVISO` varchar(70) COLLATE utf8_bin NOT NULL,
  `DESCRIPCION_AVISO` text COLLATE utf8_bin NOT NULL,
  `USUARIO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `oferta_pension`
--

INSERT INTO `oferta_pension` (`ID`, `HABITACIONES_DISPONIBLES`, `HABITACIONES_INDIVIDUALES`, `HABITACIONES_COMPARTIDAS`, `NUM_HABITANTES`, `HABITACIONES_BANIO_INTERNO`, `GENERO_ADMITIDO`, `ALIMENTACION_INCLUIDA`, `PRECIO_MENSUAL`, `NUM_CELULAR`, `TITULO_AVISO`, `DESCRIPCION_AVISO`, `USUARIO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(7, 2, 1, 2, 6, 0, 'TODOS', 1, 500000, 3456789098, 'Se buscan pensionados', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 1, '2019-11-27 20:19:24', '2019-11-27 20:19:24'),
(8, 2, 2, 0, 8, 2, 'TODOS', 1, 600000, 3162024789, 'adfsf sa fdsd ff dsdf sdf', 'fda fds sd fdkjfdksl  bfksd ulb dfdsjb sdfklñiufdsliofds nflisd bfsdlf hdsfldsjh f9pauidfdhbfjds fdsfdsijhfusd fdsjfkds fdslfbdisfsdjfsd lifdslifhdsfsdnjfodis f sd fn dsfkjdsifdsjf', 1, '2019-11-27 23:35:07', '2019-11-27 23:35:07'),
(9, 1, 0, 1, 2, 0, 'TODOS', 1, 450000, 3162024789, 'adfsf sa fdsd ff dsdf sdf', 'afsdfs fsfd safd sf dgsdfg sfdg  dfgfdg dfgsdfgh thgfhf gfh jhjhjjhgjh gjgh hjhfgjh', 1, '2019-11-27 23:41:11', '2019-11-27 23:41:11'),
(10, 1, 0, 1, 2, 1, 'MUJERES', 1, 450000, 3162024789, 'adfsf sa fdsd ff dsdf sdf', 'a asdfsdafdsfsa iofdaf disafdoisfsaifudsj fsafdfdsaf adf dasf sdfdsfasafd', 1, '2019-11-27 23:42:31', '2019-11-27 23:42:31'),
(13, 3, 2, 1, 1, 1, 'TODOS', 1, 850000, 3162024789, 'Se reciben pensionados', 'la mejor oferta del mercado', 1, '2019-12-02 19:11:40', '2019-12-02 19:11:40'),
(14, 1, 1, 0, 3, 0, 'TODOS', 1, 450000, 2465564654, 'Se buscan pensionados', 'Pensión en cartagena, cerca al estadio y a la avenida', 9, '2019-12-18 16:00:01', '2019-12-18 16:00:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reset_password`
--

CREATE TABLE `reset_password` (
  `ID` int(11) NOT NULL,
  `EMAIL` text COLLATE utf8_bin NOT NULL,
  `TOKEN_ENLACE` text COLLATE utf8_bin NOT NULL,
  `CREADO_EN` datetime NOT NULL,
  `ACTUALIZADO_EN` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_especifico`
--

CREATE TABLE `servicio_especifico` (
  `ID` int(11) NOT NULL,
  `SERVICIO` varchar(20) COLLATE utf8_bin NOT NULL,
  `ICONO` varchar(45) COLLATE utf8_bin NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `servicio_especifico`
--

INSERT INTO `servicio_especifico` (`ID`, `SERVICIO`, `ICONO`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'WIFI', 'fa-umbrella-beach', '2019-10-20 22:56:38', '2019-10-20 22:56:38'),
(2, 'TV', 'fa-umbrella-beach', '2019-10-20 22:56:56', '2019-10-20 22:56:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_especifico_has_oferta_casa_apto`
--

CREATE TABLE `servicio_especifico_has_oferta_casa_apto` (
  `ID` int(11) NOT NULL,
  `SERVICIO_ESPECIFICO_ID` int(11) NOT NULL,
  `OFERTA_CASA_APTO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `servicio_especifico_has_oferta_casa_apto`
--

INSERT INTO `servicio_especifico_has_oferta_casa_apto` (`ID`, `SERVICIO_ESPECIFICO_ID`, `OFERTA_CASA_APTO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(4, 1, 5, '2019-11-08 20:18:37', '2019-11-08 20:18:37'),
(5, 1, 6, '2019-11-08 21:08:57', '2019-11-08 21:08:57'),
(6, 2, 6, '2019-11-08 21:08:57', '2019-11-08 21:08:57'),
(7, 1, 7, '2019-11-18 23:32:44', '2019-11-18 23:32:44'),
(8, 2, 7, '2019-11-18 23:32:44', '2019-11-18 23:32:44'),
(9, 2, 9, '2019-11-18 23:40:36', '2019-11-18 23:40:36'),
(10, 1, 10, '2019-11-25 17:30:51', '2019-11-25 17:30:51'),
(11, 2, 10, '2019-11-25 17:30:51', '2019-11-25 17:30:51'),
(12, 2, 44, '2019-12-02 18:50:35', '2019-12-02 18:50:35'),
(13, 1, 45, '2019-12-18 15:29:00', '2019-12-18 15:29:00'),
(14, 2, 45, '2019-12-18 15:29:00', '2019-12-18 15:29:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_especifico_has_oferta_habitacion`
--

CREATE TABLE `servicio_especifico_has_oferta_habitacion` (
  `ID` int(11) NOT NULL,
  `SERVICIO_ESPECIFICO_ID` int(11) NOT NULL,
  `OFERTA_HABITACION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `servicio_especifico_has_oferta_habitacion`
--

INSERT INTO `servicio_especifico_has_oferta_habitacion` (`ID`, `SERVICIO_ESPECIFICO_ID`, `OFERTA_HABITACION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(11, 1, 11, '2019-11-23 04:13:39', '2019-11-23 04:13:39'),
(12, 2, 11, '2019-11-23 04:13:39', '2019-11-23 04:13:39'),
(13, 1, 12, '2019-11-27 16:44:13', '2019-11-27 16:44:13'),
(14, 2, 12, '2019-11-27 16:44:13', '2019-11-27 16:44:13'),
(15, 1, 13, '2019-11-27 16:52:08', '2019-11-27 16:52:08'),
(16, 2, 13, '2019-11-27 16:52:08', '2019-11-27 16:52:08'),
(17, 1, 14, '2019-12-02 19:02:08', '2019-12-02 19:02:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_especifico_has_oferta_pension`
--

CREATE TABLE `servicio_especifico_has_oferta_pension` (
  `ID` int(11) NOT NULL,
  `SERVICIO_ESPECIFICO_ID` int(11) NOT NULL,
  `OFERTA_PENSION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `servicio_especifico_has_oferta_pension`
--

INSERT INTO `servicio_especifico_has_oferta_pension` (`ID`, `SERVICIO_ESPECIFICO_ID`, `OFERTA_PENSION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(5, 1, 7, '2019-11-27 20:19:25', '2019-11-27 20:19:25'),
(6, 2, 7, '2019-11-27 20:19:25', '2019-11-27 20:19:25'),
(7, 1, 8, '2019-11-27 23:35:09', '2019-11-27 23:35:09'),
(8, 2, 8, '2019-11-27 23:35:09', '2019-11-27 23:35:09'),
(9, 1, 9, '2019-11-27 23:41:12', '2019-11-27 23:41:12'),
(10, 2, 9, '2019-11-27 23:41:12', '2019-11-27 23:41:12'),
(11, 1, 10, '2019-11-27 23:42:32', '2019-11-27 23:42:32'),
(12, 2, 10, '2019-11-27 23:42:32', '2019-11-27 23:42:32'),
(13, 1, 13, '2019-12-02 19:11:40', '2019-12-02 19:11:40'),
(14, 2, 13, '2019-12-02 19:11:41', '2019-12-02 19:11:41'),
(15, 2, 14, '2019-12-18 16:00:02', '2019-12-18 16:00:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion_oferta_casa_apto`
--

CREATE TABLE `ubicacion_oferta_casa_apto` (
  `ID` int(11) NOT NULL,
  `PAIS` varchar(25) COLLATE utf8_bin NOT NULL,
  `DEPARTAMENTO` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `CIUDAD` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `LOCALIDAD` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `DIRECCION` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `CODIGO_POSTAL` int(11) DEFAULT NULL,
  `LATITUD` double NOT NULL,
  `LONGITUD` double NOT NULL,
  `OFERTA_CASA_APTO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `ubicacion_oferta_casa_apto`
--

INSERT INTO `ubicacion_oferta_casa_apto` (`ID`, `PAIS`, `DEPARTAMENTO`, `CIUDAD`, `LOCALIDAD`, `DIRECCION`, `CODIGO_POSTAL`, `LATITUD`, `LONGITUD`, `OFERTA_CASA_APTO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(5, 'COLOMBIA', 'BOLÍVAR', 'MAGANGUÉ', NULL, 'calle 13b #33', 130005, 9.251860666763683, -74.76554632186891, 5, '2019-11-08 20:18:36', '2019-11-08 20:18:36'),
(6, 'COLOMBIA', 'BOLÍVAR', 'MAGANGUÉ', NULL, 'calle 13b #33', 130005, 9.23987341325684, -74.75258588790895, 6, '2019-11-08 21:08:56', '2019-11-08 21:08:56'),
(7, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', '90A #38-131, Cartagena, Provincia de Cartagena, Bolívar, Colombia', 130004, 10.402981535057368, -75.51639318466188, 7, '2019-11-18 23:32:40', '2019-11-18 23:32:40'),
(8, 'COLOMBIA', 'VALLE DEL CAUCA', 'CARTAGO', 'CRA. 7 #10-44', 'Cra. 7 #10-44, Cartago, Valle del Cauca, Colombia', 762021, 4.747154786583287, -75.90991616249084, 8, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(9, 'COLOMBIA', 'BOGOTÁ', 'KR 62 - CL 168', NULL, 'Kr 62 - Cl 168, Bogotá, Colombia', 111156, 4.752522165763838, -74.05491113662721, 9, '2019-11-18 23:40:35', '2019-11-18 23:40:35'),
(10, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', 'Cra. 44 #31a-26, Cartagena, Provincia de Cartagena, Bolívar, Colombia', 130010, 10.380356206445464, -75.4691004753113, 10, '2019-11-25 17:30:50', '2019-11-25 17:30:50'),
(11, 'COLOMBIA', 'VALLE DEL CAUCA', 'CARTAGO', 'VENECIA', 'Cra. 7 #10-44, Cartago, Valle del Cauca, Colombia', 762021, 4.74717617064695, -75.9077274799347, 9, '2019-11-18 23:38:23', '2019-11-18 23:38:23'),
(13, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', NULL, 130004, 10.419443130493164, -75.5271224975586, 11, '2019-12-02 17:43:26', '2019-12-02 17:43:26'),
(14, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', 'Cl. 29 #3910, Cartagena, Provincia de Cartagena, Bolívar, Colombia', 130015, 10.42476108554917, -75.55171251296998, 44, '2019-12-02 18:50:34', '2019-12-02 18:50:34'),
(15, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', 'Cl. 36 #33-35, Cartagena, Provincia de Cartagena, Bolívar, Colombia', 130004, 10.4146325, -75.51859939999997, 45, '2019-12-18 15:28:59', '2019-12-18 15:28:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion_oferta_habitacion`
--

CREATE TABLE `ubicacion_oferta_habitacion` (
  `ID` int(11) NOT NULL,
  `PAIS` varchar(25) COLLATE utf8_bin NOT NULL,
  `DEPARTAMENTO` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `CIUDAD` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `LOCALIDAD` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `DIRECCION` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `CODIGO_POSTAL` int(11) DEFAULT NULL,
  `LATITUD` double NOT NULL DEFAULT 10.419442963651132,
  `LONGITUD` double NOT NULL DEFAULT -75.5254912376404,
  `OFERTA_HABITACION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `ubicacion_oferta_habitacion`
--

INSERT INTO `ubicacion_oferta_habitacion` (`ID`, `PAIS`, `DEPARTAMENTO`, `CIUDAD`, `LOCALIDAD`, `DIRECCION`, `CODIGO_POSTAL`, `LATITUD`, `LONGITUD`, `OFERTA_HABITACION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(9, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', 'av. camino de enmedio calle 31a', 130004, 10.419442963651132, -75.5254912376404, 11, '2019-11-23 04:13:38', '2019-11-23 04:13:38'),
(10, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', 'Cra. 44 #31a-20, Cartagena, Provincia de Cartagena, Bolívar, Colombia', 130004, 10.419442963651132, -75.5254912376404, 12, '2019-11-27 16:44:12', '2019-11-27 16:44:12'),
(11, 'COLOMBIA', 'VALLE DEL CAUCA', 'CALI', 'CL. 9 #37A-54', 'Cl. 9 #37A-54, Cali, Valle del Cauca, Colombia', 760042, 10.419442963651132, -75.5254912376404, 13, '2019-11-27 16:52:07', '2019-11-27 16:52:07'),
(12, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', NULL, NULL, 130004, 10.4195841, -75.5271224, 13, '2019-12-02 17:58:03', '2019-12-02 17:58:03'),
(13, 'COLOMBIA', 'BOLÍVAR', 'CARTAGENA PROVINCE', 'CARTAGENA', 'Calamares, Cartagena, Cartagena Province, Bolivar, Colombia', 130014, 10.3945396, -75.49782399999998, 14, '2019-12-02 19:02:07', '2019-12-02 19:02:07'),
(14, 'COLOMBIA', 'BOLÍVAR', 'MONTECRISTO', NULL, 'Montecristo, Bolívar, Colombia', 134077, 8.0952185, -74.49945170000001, 15, '2019-12-18 15:53:06', '2019-12-18 15:53:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion_oferta_pension`
--

CREATE TABLE `ubicacion_oferta_pension` (
  `ID` int(11) NOT NULL,
  `PAIS` varchar(25) COLLATE utf8_bin NOT NULL,
  `DEPARTAMENTO` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `CIUDAD` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `LOCALIDAD` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `DIRECCION` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `CODIGO_POSTAL` int(11) DEFAULT NULL,
  `LATITUD` double NOT NULL DEFAULT 10.419442963651132,
  `LONGITUD` double NOT NULL DEFAULT -75.5254912376404,
  `OFERTA_PENSION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `ubicacion_oferta_pension`
--

INSERT INTO `ubicacion_oferta_pension` (`ID`, `PAIS`, `DEPARTAMENTO`, `CIUDAD`, `LOCALIDAD`, `DIRECCION`, `CODIGO_POSTAL`, `LATITUD`, `LONGITUD`, `OFERTA_PENSION_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(5, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', NULL, NULL, 130004, 10.419442963651132, -75.5254912376404, 7, '2019-11-27 20:19:24', '2019-11-27 20:19:24'),
(6, 'COLOMBIA', 'BOLÍVAR', 'MONTECRISTO', 'BETANIA', 'Betania, Montecristo, Bolívar, Colombia', 134077, 10.419442963651132, -75.5254912376404, 8, '2019-11-27 23:35:07', '2019-11-27 23:35:07'),
(7, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', 'Carrera 76 C, Cartagena, Provincia de Cartagena, Bolívar, Colombia', 130011, 10.419442963651132, -75.5254912376404, 9, '2019-11-27 23:41:11', '2019-11-27 23:41:11'),
(8, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'TV. 40 #25', '44, Tv. 40 #25, Provincia de Cartagena, Bolívar, Colombia', NULL, 10.419442963651132, -75.5254912376404, 10, '2019-11-27 23:42:31', '2019-11-27 23:42:31'),
(9, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', NULL, 130004, 10.419442963651132, -75.5254912376404, 10, '2019-12-02 18:04:41', '2019-12-02 18:04:41'),
(10, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', NULL, 130004, 10.4195841, -75.5271224, 10, '2019-12-02 18:08:17', '2019-12-02 18:08:17'),
(11, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CL. 32 #35', '86 Avenida Pedro Romero, Cl. 32 #35, Provincia de Cartagena, Bolívar, Colombia', 130004, 10.410812499999999, -75.5160121, 13, '2019-12-02 19:11:40', '2019-12-02 19:11:40'),
(12, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', 'CARTAGENA', 'Cra. 51 #30f-7, Cartagena, Provincia de Cartagena, Bolívar, Colombia', 130014, 10.4033729, -75.49997289999999, 14, '2019-12-18 16:00:01', '2019-12-18 16:00:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(45) COLLATE utf8_bin NOT NULL,
  `APELLIDOS` varchar(45) COLLATE utf8_bin NOT NULL,
  `EMAIL` varchar(55) COLLATE utf8_bin NOT NULL,
  `CONTRASENIA` text COLLATE utf8_bin NOT NULL,
  `ID_TOKEN` text COLLATE utf8_bin DEFAULT NULL,
  `FOTO` varchar(75) COLLATE utf8_bin DEFAULT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `NOMBRE`, `APELLIDOS`, `EMAIL`, `CONTRASENIA`, `ID_TOKEN`, `FOTO`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'Edwin junior', 'guerrero acosta', 'eguerreroa1@gmail.com', '30785fd70e0e325470e2106a3eacfe0e', 'cb2c4dc52d24e5218d2a9d172b626da3', '097p8pgs4s.webp', '2019-10-06 18:56:24', '2020-02-14 02:30:44'),
(3, 'juan ignacio', 'dinneno de cara', 'jdinnenoc1@gmail.com', '4dce53b6364e4e4c0458d71fa0e731f4', NULL, 'ql9okyxg1j.webp', '2019-10-06 21:35:15', '2019-10-31 23:54:37'),
(7, 'Edwin alberto', 'Guerrero acosta', 'eguerreroa2@gmail.com', '47f5fbb77d25045524e16d8415974df5', 'e2e2dead5cd6a94fa0df433faf19a2a8', 'avatar.png', '2019-10-14 04:04:52', '2019-11-02 02:01:39'),
(8, 'Edwin alberto', 'Guerrero Acosta', 'eguerreroa@gmail.com', '30785fd70e0e325470e2106a3eacfe0e', '17ed1a1eefce9187f65be2a295a3f4b3', 'avatar.png', '2019-12-18 14:37:28', '2019-12-18 14:43:19'),
(9, 'Jesus alberto', 'Argota viloria', 'jargotav1@asogasmon.com', 'db4f691a99329a347aa5ebe8a47e356f', 'c73a558ea26c9515e8798675fd66d232', 'tx2mkv9qbm.webp', '2019-12-18 14:46:09', '2019-12-19 01:19:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `foto_casa_apto`
--
ALTER TABLE `foto_casa_apto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_FOTO_CASA_APTO_OFERTA_CASA_APTO1` (`OFERTA_CASA_APTO_ID`);

--
-- Indices de la tabla `foto_habitacion`
--
ALTER TABLE `foto_habitacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_FOTO_HABITACION_OFERTA_HABITACION1` (`OFERTA_HABITACION_ID`);

--
-- Indices de la tabla `foto_pension`
--
ALTER TABLE `foto_pension`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_FOTO_PENSION_OFERTA_PENSION1` (`OFERTA_PENSION_ID`);

--
-- Indices de la tabla `norma_casa`
--
ALTER TABLE `norma_casa`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NORMA` (`NORMA`);

--
-- Indices de la tabla `norma_casa_has_oferta_habitacion`
--
ALTER TABLE `norma_casa_has_oferta_habitacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_NORMA_CASA_has_OFERTA_HABITACION_NORMA_CASA1` (`NORMA_CASA_ID`),
  ADD KEY `fk_NORMA_CASA_has_OFERTA_HABITACION_OFERTA_HABITACION1` (`OFERTA_HABITACION_ID`);

--
-- Indices de la tabla `norma_casa_has_oferta_pension`
--
ALTER TABLE `norma_casa_has_oferta_pension`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_NORMA_CASA_has_OFERTA_PENSION_NORMA_CASA1` (`NORMA_CASA_ID`),
  ADD KEY `fk_NORMA_CASA_has_OFERTA_PENSION_OFERTA_PENSION1` (`OFERTA_PENSION_ID`);

--
-- Indices de la tabla `oferta_casa_apto`
--
ALTER TABLE `oferta_casa_apto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_OFERTA_CASA_APTO_USUARIO1` (`USUARIO_ID`);

--
-- Indices de la tabla `oferta_habitacion`
--
ALTER TABLE `oferta_habitacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_OFERTA_HABITACION_USUARIO1` (`USUARIO_ID`);

--
-- Indices de la tabla `oferta_pension`
--
ALTER TABLE `oferta_pension`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_OFERTA_PENSION_USUARIO1` (`USUARIO_ID`);

--
-- Indices de la tabla `reset_password`
--
ALTER TABLE `reset_password`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`) USING HASH;

--
-- Indices de la tabla `servicio_especifico`
--
ALTER TABLE `servicio_especifico`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `SERVICIO` (`SERVICIO`);

--
-- Indices de la tabla `servicio_especifico_has_oferta_casa_apto`
--
ALTER TABLE `servicio_especifico_has_oferta_casa_apto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_SERVICIO_ESPE1` (`SERVICIO_ESPECIFICO_ID`),
  ADD KEY `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_OFERTA_CASA_A1` (`OFERTA_CASA_APTO_ID`);

--
-- Indices de la tabla `servicio_especifico_has_oferta_habitacion`
--
ALTER TABLE `servicio_especifico_has_oferta_habitacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_SERVICIO_E1` (`SERVICIO_ESPECIFICO_ID`),
  ADD KEY `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_OFERTA_HAB1` (`OFERTA_HABITACION_ID`);

--
-- Indices de la tabla `servicio_especifico_has_oferta_pension`
--
ALTER TABLE `servicio_especifico_has_oferta_pension`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_SERVICIO_ESPE1` (`SERVICIO_ESPECIFICO_ID`),
  ADD KEY `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_OFERTA_PENSIO1` (`OFERTA_PENSION_ID`);

--
-- Indices de la tabla `ubicacion_oferta_casa_apto`
--
ALTER TABLE `ubicacion_oferta_casa_apto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `OFERTA_CASA_APTO_ID` (`OFERTA_CASA_APTO_ID`);

--
-- Indices de la tabla `ubicacion_oferta_habitacion`
--
ALTER TABLE `ubicacion_oferta_habitacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `OFERTA_HABITACION_ID` (`OFERTA_HABITACION_ID`);

--
-- Indices de la tabla `ubicacion_oferta_pension`
--
ALTER TABLE `ubicacion_oferta_pension`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `OFERTA_PENSION_ID` (`OFERTA_PENSION_ID`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`),
  ADD KEY `ID_TOKEN` (`ID_TOKEN`(1024));

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `foto_casa_apto`
--
ALTER TABLE `foto_casa_apto`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `foto_habitacion`
--
ALTER TABLE `foto_habitacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `foto_pension`
--
ALTER TABLE `foto_pension`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `norma_casa`
--
ALTER TABLE `norma_casa`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `norma_casa_has_oferta_habitacion`
--
ALTER TABLE `norma_casa_has_oferta_habitacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `norma_casa_has_oferta_pension`
--
ALTER TABLE `norma_casa_has_oferta_pension`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `oferta_casa_apto`
--
ALTER TABLE `oferta_casa_apto`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `oferta_habitacion`
--
ALTER TABLE `oferta_habitacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `oferta_pension`
--
ALTER TABLE `oferta_pension`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `reset_password`
--
ALTER TABLE `reset_password`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `servicio_especifico`
--
ALTER TABLE `servicio_especifico`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `servicio_especifico_has_oferta_casa_apto`
--
ALTER TABLE `servicio_especifico_has_oferta_casa_apto`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `servicio_especifico_has_oferta_habitacion`
--
ALTER TABLE `servicio_especifico_has_oferta_habitacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `servicio_especifico_has_oferta_pension`
--
ALTER TABLE `servicio_especifico_has_oferta_pension`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `ubicacion_oferta_casa_apto`
--
ALTER TABLE `ubicacion_oferta_casa_apto`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `ubicacion_oferta_habitacion`
--
ALTER TABLE `ubicacion_oferta_habitacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `ubicacion_oferta_pension`
--
ALTER TABLE `ubicacion_oferta_pension`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `foto_casa_apto`
--
ALTER TABLE `foto_casa_apto`
  ADD CONSTRAINT `fk_FOTO_CASA_APTO_OFERTA_CASA_APTO1` FOREIGN KEY (`OFERTA_CASA_APTO_ID`) REFERENCES `oferta_casa_apto` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `foto_habitacion`
--
ALTER TABLE `foto_habitacion`
  ADD CONSTRAINT `fk_FOTO_HABITACION_OFERTA_HABITACION1` FOREIGN KEY (`OFERTA_HABITACION_ID`) REFERENCES `oferta_habitacion` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `foto_pension`
--
ALTER TABLE `foto_pension`
  ADD CONSTRAINT `fk_FOTO_PENSION_OFERTA_PENSION1` FOREIGN KEY (`OFERTA_PENSION_ID`) REFERENCES `oferta_pension` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `norma_casa_has_oferta_habitacion`
--
ALTER TABLE `norma_casa_has_oferta_habitacion`
  ADD CONSTRAINT `fk_NORMA_CASA_has_OFERTA_HABITACION_NORMA_CASA1` FOREIGN KEY (`NORMA_CASA_ID`) REFERENCES `norma_casa` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_NORMA_CASA_has_OFERTA_HABITACION_OFERTA_HABITACION1` FOREIGN KEY (`OFERTA_HABITACION_ID`) REFERENCES `oferta_habitacion` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `norma_casa_has_oferta_pension`
--
ALTER TABLE `norma_casa_has_oferta_pension`
  ADD CONSTRAINT `fk_NORMA_CASA_has_OFERTA_PENSION_NORMA_CASA1` FOREIGN KEY (`NORMA_CASA_ID`) REFERENCES `norma_casa` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_NORMA_CASA_has_OFERTA_PENSION_OFERTA_PENSION1` FOREIGN KEY (`OFERTA_PENSION_ID`) REFERENCES `oferta_pension` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `oferta_casa_apto`
--
ALTER TABLE `oferta_casa_apto`
  ADD CONSTRAINT `fk_OFERTA_CASA_APTO_USUARIO1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuario` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `oferta_habitacion`
--
ALTER TABLE `oferta_habitacion`
  ADD CONSTRAINT `fk_OFERTA_HABITACION_USUARIO1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuario` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `oferta_pension`
--
ALTER TABLE `oferta_pension`
  ADD CONSTRAINT `fk_OFERTA_PENSION_USUARIO1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuario` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_especifico_has_oferta_casa_apto`
--
ALTER TABLE `servicio_especifico_has_oferta_casa_apto`
  ADD CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_OFERTA_CASA_A1` FOREIGN KEY (`OFERTA_CASA_APTO_ID`) REFERENCES `oferta_casa_apto` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_CASA_APTO_SERVICIO_ESPE1` FOREIGN KEY (`SERVICIO_ESPECIFICO_ID`) REFERENCES `servicio_especifico` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_especifico_has_oferta_habitacion`
--
ALTER TABLE `servicio_especifico_has_oferta_habitacion`
  ADD CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_OFERTA_HAB1` FOREIGN KEY (`OFERTA_HABITACION_ID`) REFERENCES `oferta_habitacion` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_HABITACION_SERVICIO_E1` FOREIGN KEY (`SERVICIO_ESPECIFICO_ID`) REFERENCES `servicio_especifico` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_especifico_has_oferta_pension`
--
ALTER TABLE `servicio_especifico_has_oferta_pension`
  ADD CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_OFERTA_PENSIO1` FOREIGN KEY (`OFERTA_PENSION_ID`) REFERENCES `oferta_pension` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_SERVICIO_ESPECIFICO_has_OFERTA_PENSION_SERVICIO_ESPE1` FOREIGN KEY (`SERVICIO_ESPECIFICO_ID`) REFERENCES `servicio_especifico` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ubicacion_oferta_casa_apto`
--
ALTER TABLE `ubicacion_oferta_casa_apto`
  ADD CONSTRAINT `ubicacion_oferta_casa_apto_ibfk_1` FOREIGN KEY (`OFERTA_CASA_APTO_ID`) REFERENCES `oferta_casa_apto` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ubicacion_oferta_habitacion`
--
ALTER TABLE `ubicacion_oferta_habitacion`
  ADD CONSTRAINT `ubicacion_oferta_habitacion_ibfk_1` FOREIGN KEY (`OFERTA_HABITACION_ID`) REFERENCES `oferta_habitacion` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ubicacion_oferta_pension`
--
ALTER TABLE `ubicacion_oferta_pension`
  ADD CONSTRAINT `ubicacion_oferta_pension_ibfk_1` FOREIGN KEY (`OFERTA_PENSION_ID`) REFERENCES `oferta_pension` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
