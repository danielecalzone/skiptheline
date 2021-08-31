-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: provafinale_idsw
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `supermercato`
--

DROP TABLE IF EXISTS `supermercato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supermercato` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(255) NOT NULL,
  `Indirizzo` varchar(255) DEFAULT NULL,
  `OrarioApertura` time NOT NULL DEFAULT '09:00:00',
  `OrarioChiusura` time NOT NULL DEFAULT '20:00:00',
  `Capienza` int NOT NULL DEFAULT '0',
  `User` varchar(45) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Abilitato` tinyint NOT NULL DEFAULT '0',
  `Amministratore` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supermercato`
--

LOCK TABLES `supermercato` WRITE;
/*!40000 ALTER TABLE `supermercato` DISABLE KEYS */;
INSERT INTO `supermercato` VALUES (1,'Esselunga','Via Dei Piceni 13','08:00:00','08:00:00',10,'piceni@esselunga.com','c1pCaawsK3KV3MwchHV8RMbyTPHdI/m1xPcphdKQFKI/AuFIPIznW6T+gQY4RBhJ',1,0),(2,'Carrefour','Via Roma 18','09:00:00','23:00:00',1,'roma18@carrefour.com','LBayDh2imhv03OGBCgvP1+3SnGAo+fb1565kboIBfQsDGQ6HqCkU60n9FoUce+Lf',1,0),(3,'Eurospin','Via Tiburtina 12','08:00:00','22:00:00',1,'eurospin@eurospinitalia.com','kYWOs5glr2Ogqy3njVYxFkax2dsdvtEWUK39RLP/pjL6wdYY52dMfK28r3tZoTJw',1,0),(4,'Pam','Via Tiburtina 86','08:00:00','14:00:00',200,'tiburtian86@pam.com','Li9wyxVAs5CUSgaZZhZCfzE6gFTrgkzrvBZDJlAsMbPqQ+eAOBCqvDn2bKp3f9Br',1,0),(5,'Lidl','Via Galla Placidia','09:00:00','20:00:00',50,'placidia@lidl.com','SOKtSUcs+DrgJcSUzrUz2yEMzM8IRHtzDrabcp1Y0tb82/JhdE7jxMuBo62351WX',1,0),(11,'Amministratore','','09:00:00','20:00:00',12,'admin@skiptheline.it','5JVKK2fCVan2REaYpE+zX5sNPNE7nlX+5hGPFTh6pmgQCeeUDxodNSnw35PkWLG0',0,1);
/*!40000 ALTER TABLE `supermercato` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-31 21:41:14
