CREATE DATABASE  IF NOT EXISTS `db_saude` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci */;
USE `db_saude`;
-- MySQL dump 10.13  Distrib 5.7.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db_saude
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cadatendimento`
--

DROP TABLE IF EXISTS `cadatendimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadatendimento` (
  `idcadAtendimento` int(11) NOT NULL,
  `idcadPacientes` int(11) NOT NULL,
  `resultados` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `localAtendimento` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `sacolaMedicamento` text COLLATE latin1_general_ci,
  `dataAtendimento` timestamp NOT NULL,
  `textEncaminhamento` text COLLATE latin1_general_ci NOT NULL,
  `localEncaminhamento` varchar(255) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`idcadAtendimento`),
  KEY `idcadPacientes_idx` (`idcadPacientes`),
  CONSTRAINT `idcadPacientes` FOREIGN KEY (`idcadPacientes`) REFERENCES `cadpacientes` (`idcadPacientes`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadatendimento`
--

LOCK TABLES `cadatendimento` WRITE;
/*!40000 ALTER TABLE `cadatendimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadatendimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadpacientes`
--

DROP TABLE IF EXISTS `cadpacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadpacientes` (
  `idcadPacientes` int(11) NOT NULL,
  `nomePacientes` varchar(65) COLLATE latin1_general_ci NOT NULL,
  `cpf` varchar(11) COLLATE latin1_general_ci NOT NULL,
  `cartaoSus` varchar(15) COLLATE latin1_general_ci NOT NULL,
  `endereco` varchar(65) COLLATE latin1_general_ci NOT NULL,
  `telefone` varchar(11) COLLATE latin1_general_ci NOT NULL,
  `dataNascimento` varchar(8) COLLATE latin1_general_ci NOT NULL,
  `datacadPacientes` timestamp NOT NULL,
  PRIMARY KEY (`idcadPacientes`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadpacientes`
--

LOCK TABLES `cadpacientes` WRITE;
/*!40000 ALTER TABLE `cadpacientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadpacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadusuarios`
--

DROP TABLE IF EXISTS `cadusuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadusuarios` (
  `idcadUsuarios` int(11) NOT NULL,
  `nomeUsuarios` varchar(65) COLLATE latin1_general_ci NOT NULL,
  `cpf` varchar(11) COLLATE latin1_general_ci NOT NULL,
  `senha` varchar(32) COLLATE latin1_general_ci NOT NULL,
  `tipo` tinyint(4) NOT NULL,
  `datacadUsuarios` timestamp NOT NULL,
  PRIMARY KEY (`idcadUsuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadusuarios`
--

LOCK TABLES `cadusuarios` WRITE;
/*!40000 ALTER TABLE `cadusuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadusuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-18 13:53:20
