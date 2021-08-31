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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) NOT NULL,
  `Cognome` varchar(45) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'Utente','Utente','user1','ldDpeSJSgLSDFtEPpcfRf0YiAthSJeQl14c0flqaXAt7v5BNBSWAb9BoCBid9aZQ'),(26,'Utente','Utente','user2','gqr0yF9H8NhRSmHRHLgMpHSPNMKjf3+8CWyqjIp6U+qflh+Lm3cmGx0ychx+8J1P'),(27,'Utente','Utente','user3','rCkw9bgwCCHPW3+8dHYizukgE+WCFic6/SCo99T+cUTdDxIWVZV7C3uBTE5HibYC'),(28,'Mattia','Filardi','mattiafilardi','EWOdn5BiH/DF23nPTWA8qgYUMF2ykaD9q0DKYq8K2+lfAVYuckLjXDpCUYL3pp4m'),(29,'Utente','Utente','user4','QkpOA78YTrlMtv/9U+/DgLCEzvbwt9juSdRYQQg5YpYwSG6fWUxNlJPoxt5vvPFW'),(30,'Utente','Utente','user5','dO94l03EQuoyvb2Ggld957b+FxprXRq8q1STYS8f0ToFZqw/xLmNN2/IgfGXbuYZ'),(31,'Utente','Utente','user6','fuuXXi3d/a/1u7Ex6SkWHhx6jGvBTRVcQch5LLWf51svmBqnGFBfp+zPzKFP8kCC'),(35,'Mario','Utente','user40','e0kYQS2CWKeWRo66mw9au6USxNh8RFERWiTcJkf9ZdmhxQcoJ4t4c2pYQKZxRu7C'),(36,'Mario','Utente','user50','Li9wyxVAs5CUSgaZZhZCfzE6gFTrgkzrvBZDJlAsMbPqQ+eAOBCqvDn2bKp3f9Br'),(37,'Mario','Utente','user60','kYWOs5glr2Ogqy3njVYxFkax2dsdvtEWUK39RLP/pjL6wdYY52dMfK28r3tZoTJw'),(38,'Mario','Rossi','mariogialloverde','LBayDh2imhv03OGBCgvP1+3SnGAo+fb1565kboIBfQsDGQ6HqCkU60n9FoUce+Lf'),(40,'Utente','Utente','usernamediprova','c1pCaawsK3KV3MwchHV8RMbyTPHdI/m1xPcphdKQFKI/AuFIPIznW6T+gQY4RBhJ'),(41,'Mario','Rossi','mariorossi','TS4IINLnpgKXh9rzFfJdjIpJVtbm2rWNfCORRuTcP7XVbv3VZucP2kEzu60u48Om'),(42,'Pasquale','Ferraro','pasqualef','5JVKK2fCVan2REaYpE+zX5sNPNE7nlX+5hGPFTh6pmgQCeeUDxodNSnw35PkWLG0'),(43,'Daniele','Calzone','daniele','5JVKK2fCVan2REaYpE+zX5sNPNE7nlX+5hGPFTh6pmgQCeeUDxodNSnw35PkWLG0'),(44,'Daniele','Calzone','danielec','hN1310zVoYJQ0AY2wEMR3Mll60ySrBuUQW2dyI2h1q0288ZniVvc/uQzpZy2VTfh'),(45,'Pasquale','Ferraro','pasquale','pj3jYBzYpnLK9KzQgh4qlHzQA94KDD3jEMgbMEdZdXwBCj/eHzQGYHmcJYzj4SlX'),(46,'Mario','Rossi','marior','fK1lybAVYdQA8YUzLNIts0QMARgpBPV8ctVB4+08KrTZHQT/D1k4k221KXOZPUMP');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-31 21:41:15
