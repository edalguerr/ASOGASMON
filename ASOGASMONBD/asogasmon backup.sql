-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-12-2019 a las 04:36:54
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
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(45) COLLATE utf8_bin NOT NULL,
  `ICONO` varchar(30) COLLATE utf8_bin NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID`, `NOMBRE`, `ICONO`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'LIBROS', 'fa-snowflake', '2019-10-19 22:33:24', '2019-10-19 22:33:24'),
(2, 'OTROS', 'fa-ascensor', '2019-11-03 18:42:22', '2019-11-03 18:42:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversacion`
--

CREATE TABLE `conversacion` (
  `ID` int(11) NOT NULL,
  `ID_USUARIO_RECEPTOR` int(11) NOT NULL,
  `USUARIO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto_articulo`
--

CREATE TABLE `foto_articulo` (
  `ID` int(11) NOT NULL,
  `FOTO` varchar(45) COLLATE utf8_bin NOT NULL,
  `OFERTA_ARTICULO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `foto_articulo`
--

INSERT INTO `foto_articulo` (`ID`, `FOTO`, `OFERTA_ARTICULO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'fotos/articulos/usuario/1/foto1.jpg', 1, '2019-10-20 02:45:49', '2019-10-20 02:45:49'),
(2, 'fotos/articulos/usuario/1/foto2.jpg', 1, '2019-10-20 02:45:49', '2019-10-20 02:45:49'),
(3, 'fotos/articulos/usuario/1/foto3.jpg', 1, '2019-10-20 02:45:49', '2019-10-20 02:45:49'),
(4, 'fotos/articulos/usuario/2/foto1.jpg', 2, '2019-10-20 02:46:44', '2019-10-20 02:46:44'),
(5, 'fotos/articulos/usuario/2/foto2.jpg', 2, '2019-10-20 02:46:44', '2019-10-20 02:46:44'),
(6, 'fotos/articulos/usuario/2/foto3.jpg', 2, '2019-10-20 02:46:44', '2019-10-20 02:46:44'),
(7, 'fotos/articulos/usuario/3/foto1.jpg', 3, '2019-10-20 02:47:09', '2019-10-20 02:47:09'),
(8, 'fotos/articulos/usuario/3/foto2.jpg', 3, '2019-10-20 02:47:09', '2019-10-20 02:47:09'),
(9, 'fotos/articulos/usuario/3/foto3.jpg', 3, '2019-10-20 02:47:09', '2019-10-20 02:47:09'),
(11, 'fotos/articulos/usuario/3/foto3.jpg', 7, '2019-10-20 03:31:24', '2019-10-20 03:31:24'),
(15, '32rvgln57x.webp', 1, '2019-11-03 16:53:10', '2019-11-03 16:53:10'),
(16, 'wqhkdfxwv9.webp', 1, '2019-11-03 16:53:10', '2019-11-03 16:53:10'),
(17, 'i7p6rsqb2t.webp', 1, '2019-11-03 16:53:11', '2019-11-03 16:53:11'),
(18, 'vertgcb5ia.webp', 1, '2019-11-03 17:04:13', '2019-11-03 17:04:13'),
(19, '6elt4i3uzr.webp', 1, '2019-11-03 17:04:13', '2019-11-03 17:04:13'),
(20, 'b6er1lxcgr.webp', 1, '2019-11-03 17:04:13', '2019-11-03 17:04:13'),
(21, '4i8t7pcvh9.webp', 9, '2019-11-03 17:08:00', '2019-11-03 17:08:00'),
(22, 'omoicmbtdw.webp', 9, '2019-11-03 17:08:00', '2019-11-03 17:08:00'),
(23, 'zh7d1iqxjw.webp', 9, '2019-11-03 17:08:01', '2019-11-03 17:08:01'),
(24, 'rkc3go7oft.webp', 10, '2019-11-03 17:14:41', '2019-11-03 17:14:41'),
(25, 'lr4tlgvjt5.webp', 10, '2019-11-03 17:14:41', '2019-11-03 17:14:41'),
(26, 'yju7a5vuas.webp', 10, '2019-11-03 17:14:41', '2019-11-03 17:14:41'),
(27, '6t73vlf321.webp', 11, '2019-11-03 17:17:28', '2019-11-03 17:17:28'),
(28, 'lrv86uec7g.webp', 11, '2019-11-03 17:17:31', '2019-11-03 17:17:31'),
(29, 'zkku51x3sq.webp', 11, '2019-11-03 17:17:36', '2019-11-03 17:17:36'),
(30, 'neevbs2rja.webp', 13, '2019-11-05 03:28:56', '2019-11-05 03:28:56'),
(31, 'ypqdre1vou.webp', 13, '2019-11-05 03:28:57', '2019-11-05 03:28:57'),
(32, 'nv7ktxxsgx.webp', 13, '2019-11-05 03:28:57', '2019-11-05 03:28:57'),
(33, '3ti8zik9i1.webp', 13, '2019-11-05 03:28:57', '2019-11-05 03:28:57'),
(34, 'vhwv8p23pd.webp', 14, '2019-11-05 03:37:35', '2019-11-05 03:37:35'),
(35, '1qfpw1mgt0.webp', 14, '2019-11-05 03:37:36', '2019-11-05 03:37:36'),
(36, 'gc3h4mtq6i.webp', 14, '2019-11-05 03:37:36', '2019-11-05 03:37:36'),
(37, '2z35t28mov.webp', 14, '2019-11-05 03:37:36', '2019-11-05 03:37:36'),
(38, 'sbfadyewaz.webp', 14, '2019-11-05 03:37:36', '2019-11-05 03:37:36'),
(39, '22mmrxe1b4.webp', 15, '2019-11-07 18:07:13', '2019-11-07 18:07:13'),
(40, 'dqe66den2l.webp', 15, '2019-11-07 18:07:13', '2019-11-07 18:07:13'),
(41, 'mkddrd2o8f.webp', 15, '2019-11-07 18:07:14', '2019-11-07 18:07:14'),
(42, 'qenihpjlck.webp', 16, '2019-11-08 16:43:47', '2019-11-08 16:43:47'),
(43, '142jg6xhhx.webp', 17, '2019-11-08 16:54:05', '2019-11-08 16:54:05'),
(44, '6v81fwga3m.webp', 18, '2019-11-08 16:59:57', '2019-11-08 16:59:57'),
(45, '4ef5xpeani.webp', 19, '2019-11-08 17:08:56', '2019-11-08 17:08:56'),
(46, 'oe8pu8wq0y.webp', 20, '2019-11-08 17:11:06', '2019-11-08 17:11:06'),
(47, 'wuyx8ije1h.webp', 20, '2019-11-08 17:11:07', '2019-11-08 17:11:07'),
(48, 'de7v74z6a1.webp', 21, '2019-11-08 17:12:52', '2019-11-08 17:12:52'),
(49, 'cpq3lgi5mb.webp', 21, '2019-11-08 17:12:53', '2019-11-08 17:12:53'),
(50, 'rpce0yxlr0.webp', 21, '2019-11-08 17:12:53', '2019-11-08 17:12:53'),
(51, 'cinl24nb48.webp', 23, '2019-11-08 17:17:08', '2019-11-08 17:17:08'),
(52, 'ntmjip1nj2.webp', 24, '2019-11-08 17:17:56', '2019-11-08 17:17:56'),
(53, '6k8voe9ljp.webp', 25, '2019-12-18 15:33:50', '2019-12-18 15:33:50'),
(54, 'xc2nbsa1fs.webp', 25, '2019-12-18 15:33:51', '2019-12-18 15:33:51');

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
(1, 'fotos/casaApto/usuario/3/foto1.jpg', 1, '2019-10-20 22:24:35', '2019-10-20 22:24:35'),
(2, 'fotos/casaApto/usuario/3/foto2.jpg', 1, '2019-10-20 22:24:35', '2019-10-20 22:24:35'),
(3, 'fotos/casaApto/usuario/3/foto3.jpg', 1, '2019-10-20 22:24:35', '2019-10-20 22:24:35'),
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
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `ID` int(11) NOT NULL,
  `MENSAJE` text COLLATE utf8_bin DEFAULT NULL,
  `DIRECCION_MENSAJE` varchar(12) COLLATE utf8_bin DEFAULT 'ENVIADO',
  `CONVERSACION_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
-- Estructura de tabla para la tabla `oferta_articulo`
--

CREATE TABLE `oferta_articulo` (
  `ID` int(11) NOT NULL,
  `DESCRIPCION` text COLLATE utf8_bin NOT NULL,
  `PRECIO` int(11) NOT NULL,
  `NUMERO_CELULAR` bigint(20) NOT NULL,
  `TITULO_AVISO` varchar(70) COLLATE utf8_bin NOT NULL,
  `USUARIO_ID` int(11) NOT NULL,
  `SUB_CATEGORIA_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `oferta_articulo`
--

INSERT INTO `oferta_articulo` (`ID`, `DESCRIPCION`, `PRECIO`, `NUMERO_CELULAR`, `TITULO_AVISO`, `USUARIO_ID`, `SUB_CATEGORIA_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'Vendo libro de  algebra de baldor edicion numero 2, precio negociable, en buen estado, hojas limpias sin doblar', 50000, 3106022481, 'Algebra de baldor edicion 2', 1, 1, '2019-10-19 23:42:35', '2019-10-19 23:42:35'),
(2, 'Vendo libro de calculo diferencial de ron larson con ejercicios propuestos y solucionario, precio negociable, en buen estado, hojas limpias sin doblar', 70000, 3124567890, 'Calculo diferencial Ron larson', 3, 1, '2019-10-19 23:52:24', '2019-10-19 23:52:24'),
(3, 'Vendo libro de programacion en c++, explica los fundamentos del lenguaje, ejemplos practicos, precio negociable, en buen estado, hojas limpias sin doblar', 60000, 3124567890, 'C++ fundamentos', 3, 4, '2019-10-20 02:34:50', '2019-10-20 02:34:50'),
(7, 'Vendo libro de contaduria, explica los fundamentos contables con ejemplos practicos y solucionario incluido, precio negociable, en buen estado, hojas limpias sin doblar', 45000, 3124567890, 'Fundamentos de contaduria', 3, 3, '2019-10-20 03:31:24', '2019-10-20 03:31:24'),
(9, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 650000, 3124567890, 'Casa en arriendo', 1, 1, '2019-11-03 17:08:00', '2019-11-03 17:08:00'),
(10, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 650000, 3124567890, 'Casa en arriendo', 1, 1, '2019-11-03 17:14:40', '2019-11-03 17:14:40'),
(11, 'Casa en arriendo, cerca a la avenida, con patio grande e individual', 650000, 3124567890, 'Casa en arriendo', 1, 1, '2019-11-03 17:17:25', '2019-11-03 17:17:25'),
(13, 'Libro en buen estado, hojas limpias y sin doblar.', 43000, 4556231333, 'Libro algebra de baldor con ejercicios resueltos', 1, 1, '2019-11-05 03:28:55', '2019-11-05 03:28:55'),
(14, 'Naranjas tropicales, frescas, dulces, de buen tamaño, + 20 naranjas de ñapa. El costo de envio no va incluido', 10000, 3265148975, 'Ciento de naranja en venta', 1, 5, '2019-11-05 03:37:35', '2019-11-05 03:37:35'),
(15, 'bata de laboratorio de fisica y quimica para ingenieria de sistemas, talla s', 23000, 1243454354, 'Bata de laboratorio', 1, 5, '2019-11-07 18:07:12', '2019-11-07 18:07:12'),
(16, 'Sueter con logo de html + css + js', 25000, 5123456786, 'Sueter desarrollador en venta', 1, 4, '2019-11-08 16:43:45', '2019-11-08 16:43:45'),
(17, 'Sueter desarrollo angular en venta, buena tela', 18000, 6478687876, 'Sueter angular developer en venta', 1, 5, '2019-11-08 16:54:04', '2019-11-08 16:54:04'),
(18, 'Sueter de git a la venta, tela fresca, ideal para la calor', 28000, 2131237631, 'Sueter control de versiones git a la venta', 1, 5, '2019-11-08 16:59:56', '2019-11-08 16:59:56'),
(19, 'Sueter con frase en ingles que traduce nunca olvides, asociado con una imagen de un disquete', 15000, 6549685456, 'sueter informatico', 1, 5, '2019-11-08 17:08:56', '2019-11-08 17:08:56'),
(20, 'sueter limpio en buen estado, no incluye el envio', 15000, 6549685456, 'sueter informatico', 1, 5, '2019-11-08 17:11:06', '2019-11-08 17:11:06'),
(21, 'pack fullstack developer', 40000, 6546547646, 'sueters angular + node', 1, 5, '2019-11-08 17:12:52', '2019-11-08 17:12:52'),
(23, 'Diagrams + documentacion para proyectos de ingenieria de software', 60000, 5786854686, 'se hacen diagramas uml', 1, 5, '2019-11-08 17:17:08', '2019-11-08 17:17:08'),
(24, 'Maduritas, dulces y deliciosas', 60000, 5786854686, 'Ciento de naranja en venta', 1, 5, '2019-11-08 17:17:56', '2019-11-08 17:17:56'),
(25, 'Apuntes de clases, introducción al álgebra con ejercicios y solucionario', 34000, 3146734590, 'Libro matematicas  2', 9, 1, '2019-12-18 15:33:49', '2019-12-18 15:33:49');

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
(1, 'APARTAMENTO', 3, 1, 40, 0, 0, 0, 500000, 3124567890, 'Apartamento en arriendo, cerca a zona comercial, gimnasio, parque y parqueadero inlcuido', 'Apartamento en arriendo', 3, '2019-10-20 21:28:15', '2019-10-20 21:28:15'),
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
(1, 1, 1, '2019-10-20 23:21:16', '2019-10-20 23:21:16'),
(2, 2, 1, '2019-10-20 23:21:16', '2019-10-20 23:21:16'),
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
-- Estructura de tabla para la tabla `sub_categoria`
--

CREATE TABLE `sub_categoria` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(45) COLLATE utf8_bin NOT NULL,
  `CATEGORIA_ID` int(11) NOT NULL,
  `ICONO` varchar(30) COLLATE utf8_bin NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `sub_categoria`
--

INSERT INTO `sub_categoria` (`ID`, `NOMBRE`, `CATEGORIA_ID`, `ICONO`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'MATEMATICAS', 1, 'fa-snowflake', '2019-10-19 22:48:24', '2019-10-19 22:48:24'),
(3, 'CONTADURIA', 1, 'fa-snowflake', '2019-10-19 22:51:01', '2019-10-19 22:51:01'),
(4, 'INFORMATICA', 1, 'fa-snowflake', '2019-10-19 22:58:37', '2019-10-19 22:58:37'),
(5, 'OTROS', 2, 'fa-ascensor', '2019-11-04 20:42:33', '2019-11-04 20:42:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion_oferta_articulo`
--

CREATE TABLE `ubicacion_oferta_articulo` (
  `ID` int(11) NOT NULL,
  `PAIS` varchar(25) COLLATE utf8_bin NOT NULL,
  `DEPARTAMENTO` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `CIUDAD` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `LOCALIDAD` varchar(25) COLLATE utf8_bin DEFAULT NULL,
  `OFERTA_ARTICULO_ID` int(11) NOT NULL,
  `CREADO_EN` timestamp NOT NULL DEFAULT current_timestamp(),
  `ACTUALIZADO_EN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `ubicacion_oferta_articulo`
--

INSERT INTO `ubicacion_oferta_articulo` (`ID`, `PAIS`, `DEPARTAMENTO`, `CIUDAD`, `LOCALIDAD`, `OFERTA_ARTICULO_ID`, `CREADO_EN`, `ACTUALIZADO_EN`) VALUES
(1, 'COLOMBIA', 'BOLIVAR', 'CARTAGENA', NULL, 1, '2019-10-20 03:06:41', '2019-10-20 03:06:41'),
(2, 'COLOMBIA', 'BOLIVAR', 'MAGANGUE', NULL, 2, '2019-10-20 03:07:22', '2019-10-20 03:07:22'),
(3, 'COLOMBIA', 'BOLIVAR', 'MONTECRISTO', NULL, 3, '2019-10-20 03:07:37', '2019-10-20 03:07:37'),
(5, 'COLOMBIA', 'BOLIVAR', 'MONTECRISTO', NULL, 7, '2019-10-20 03:31:24', '2019-10-20 03:31:24'),
(7, 'COLOMBIA', 'BOLIVAR', 'MAGANGUE', NULL, 9, '2019-11-03 17:08:00', '2019-11-03 17:08:00'),
(8, 'COLOMBIA', 'BOLIVAR', 'MAGANGUE', NULL, 10, '2019-11-03 17:14:40', '2019-11-03 17:14:40'),
(9, 'COLOMBIA', 'BOLIVAR', 'MAGANGUE', NULL, 11, '2019-11-03 17:17:26', '2019-11-03 17:17:26'),
(11, 'Colombia', 'Valle del Cauca', 'Cali', NULL, 13, '2019-11-05 03:28:56', '2019-11-05 03:28:56'),
(12, 'COLOMBIA', 'BOLÍVAR', 'MONTECRISTO', 'LA DORADA', 14, '2019-11-05 03:37:35', '2019-11-05 03:37:35'),
(13, 'COLOMBIA', 'VALLE DEL CAUCA', 'PALMIRA', NULL, 15, '2019-11-07 18:07:12', '2019-11-07 18:07:12'),
(14, 'COLOMBIA', 'VALLE DEL CAUCA', 'GUADALAJARA DE BUGA', NULL, 16, '2019-11-08 16:43:45', '2019-11-08 16:43:45'),
(15, 'COLOMBIA', 'VALLE DEL CAUCA', 'CARTAGO', NULL, 17, '2019-11-08 16:54:04', '2019-11-08 16:54:04'),
(16, 'COLOMBIA', 'SANTANDER', 'BUCARAMANGA', NULL, 18, '2019-11-08 16:59:56', '2019-11-08 16:59:56'),
(17, 'COLOMBIA', 'ATLÁNTICO', 'SOLEDAD', NULL, 19, '2019-11-08 17:08:56', '2019-11-08 17:08:56'),
(18, 'COLOMBIA', 'ATLÁNTICO', 'SOLEDAD', NULL, 20, '2019-11-08 17:11:06', '2019-11-08 17:11:06'),
(19, 'COLOMBIA', 'CAQUETÁ', 'CARTAGENA DEL CHAIRÁ', NULL, 21, '2019-11-08 17:12:52', '2019-11-08 17:12:52'),
(20, 'COLOMBIA', 'NORTE DE SANTANDER', 'CÚCUTA', NULL, 23, '2019-11-08 17:17:08', '2019-11-08 17:17:08'),
(21, 'COLOMBIA', 'NORTE DE SANTANDER', 'CÚCUTA', NULL, 24, '2019-11-08 17:17:56', '2019-11-08 17:17:56'),
(22, 'COLOMBIA', 'BOLÍVAR', 'MONTECRISTO', NULL, 25, '2019-12-18 15:33:49', '2019-12-18 15:33:49');

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
(1, 'COLOMBIA', 'BOLÍVAR', 'PROVINCIA DE CARTAGENA', NULL, 'calle 31a #4-77', 130001, 10.412478619147501, -75.51712274551393, 1, '2019-10-20 21:48:42', '2019-10-20 21:48:42'),
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
(1, 'Edwin junior', 'guerrero acosta', 'eguerreroa1@gmail.com', '30785fd70e0e325470e2106a3eacfe0e', 'a0672ec10073429eb697dc99152494e0', '097p8pgs4s.webp', '2019-10-06 18:56:24', '2019-12-04 20:23:59'),
(3, 'juan ignacio', 'dinneno de cara', 'jdinnenoc1@gmail.com', '4dce53b6364e4e4c0458d71fa0e731f4', NULL, 'ql9okyxg1j.webp', '2019-10-06 21:35:15', '2019-10-31 23:54:37'),
(7, 'Edwin alberto', 'Guerrero acosta', 'eguerreroa2@gmail.com', '47f5fbb77d25045524e16d8415974df5', 'e2e2dead5cd6a94fa0df433faf19a2a8', 'avatar.png', '2019-10-14 04:04:52', '2019-11-02 02:01:39'),
(8, 'Edwin alberto', 'Guerrero Acosta', 'eguerreroa@gmail.com', '30785fd70e0e325470e2106a3eacfe0e', '17ed1a1eefce9187f65be2a295a3f4b3', 'avatar.png', '2019-12-18 14:37:28', '2019-12-18 14:43:19'),
(9, 'Jesus alberto', 'Argota viloria', 'jargotav1@asogasmon.com', 'db4f691a99329a347aa5ebe8a47e356f', 'c73a558ea26c9515e8798675fd66d232', 'tx2mkv9qbm.webp', '2019-12-18 14:46:09', '2019-12-19 01:19:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NOMBRE` (`NOMBRE`);

--
-- Indices de la tabla `conversacion`
--
ALTER TABLE `conversacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_CONVERSACION_USUARIO1` (`USUARIO_ID`),
  ADD KEY `fk_CONVERSACION_USUARIO_RECEPTOR1` (`ID_USUARIO_RECEPTOR`);

--
-- Indices de la tabla `foto_articulo`
--
ALTER TABLE `foto_articulo`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_FOTO_ARTICULO_OFERTA_ARTICULO1` (`OFERTA_ARTICULO_ID`);

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
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_MENSAJE_CONVERSACION1` (`CONVERSACION_ID`);

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
-- Indices de la tabla `oferta_articulo`
--
ALTER TABLE `oferta_articulo`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_OFERTA_ARTICULO_USUARIO1` (`USUARIO_ID`),
  ADD KEY `fk_OFERTA_ARTICULO_SUB_CATEGORIA1` (`SUB_CATEGORIA_ID`);

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
-- Indices de la tabla `sub_categoria`
--
ALTER TABLE `sub_categoria`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NOMBRE` (`NOMBRE`),
  ADD KEY `fk_SUB_CATEGORIA_CATEGORIA1` (`CATEGORIA_ID`);

--
-- Indices de la tabla `ubicacion_oferta_articulo`
--
ALTER TABLE `ubicacion_oferta_articulo`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `OFERTA_ARTICULO_ID` (`OFERTA_ARTICULO_ID`);

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
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `conversacion`
--
ALTER TABLE `conversacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `foto_articulo`
--
ALTER TABLE `foto_articulo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

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
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT de la tabla `oferta_articulo`
--
ALTER TABLE `oferta_articulo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
-- AUTO_INCREMENT de la tabla `sub_categoria`
--
ALTER TABLE `sub_categoria`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ubicacion_oferta_articulo`
--
ALTER TABLE `ubicacion_oferta_articulo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
-- Filtros para la tabla `conversacion`
--
ALTER TABLE `conversacion`
  ADD CONSTRAINT `fk_CONVERSACION_USUARIO1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuario` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_CONVERSACION_USUARIO_RECEPTOR1` FOREIGN KEY (`ID_USUARIO_RECEPTOR`) REFERENCES `usuario` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `foto_articulo`
--
ALTER TABLE `foto_articulo`
  ADD CONSTRAINT `fk_FOTO_ARTICULO_OFERTA_ARTICULO1` FOREIGN KEY (`OFERTA_ARTICULO_ID`) REFERENCES `oferta_articulo` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Filtros para la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD CONSTRAINT `fk_MENSAJE_CONVERSACION1` FOREIGN KEY (`CONVERSACION_ID`) REFERENCES `conversacion` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Filtros para la tabla `oferta_articulo`
--
ALTER TABLE `oferta_articulo`
  ADD CONSTRAINT `fk_OFERTA_ARTICULO_SUB_CATEGORIA1` FOREIGN KEY (`SUB_CATEGORIA_ID`) REFERENCES `sub_categoria` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_OFERTA_ARTICULO_USUARIO1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuario` (`ID`) ON UPDATE CASCADE;

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
-- Filtros para la tabla `sub_categoria`
--
ALTER TABLE `sub_categoria`
  ADD CONSTRAINT `fk_SUB_CATEGORIA_CATEGORIA1` FOREIGN KEY (`CATEGORIA_ID`) REFERENCES `categoria` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ubicacion_oferta_articulo`
--
ALTER TABLE `ubicacion_oferta_articulo`
  ADD CONSTRAINT `ubicacion_oferta_articulo_ibfk_1` FOREIGN KEY (`OFERTA_ARTICULO_ID`) REFERENCES `oferta_articulo` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

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
