-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: api_flask
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `passport` varchar(15) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `address` varchar(120) NOT NULL,
  `state` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `passport` (`passport`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (33,'Lucas','Smith','lsmith@mail.com','2410576189','RH3OC1','Male','Folsom St 323','Active'),(34,'Peter','Johnson','pjohnson@mail.com','1912372896','UJIF36','Male','Michigan Ave 1234','Active'),(35,'Kim','Brown','kbrown@mail.com','1053409196','SDGB5X','Female','Eagle St 948','Active'),(36,'Reggie','Miller','rmiller@mail.com','1243472896','9TX4H7','Female','Hubbard St 473','Active'),(37,'Laura','Johnson','ljohnson@mail.com','1053472896','4D3BOE','Female','Verona St 3972','Inactive'),(38,'Thomas','Rodriguez','trodriguez@mail.com','3253472846','TX713C','Male','Ayers Ave 21','Active'),(39,'Harry','Taylor','htaylor@mail.com','2153472896','ZQN0KE','Male','Quinn St 381','Active'),(40,'Lucas','Jackson','ljackson@mail.com','1053443196','J70GU6','Male','Rosario St 2831','Active'),(41,'Samuel','White','swhite@mail.com','1053272896','YV1XSE','Male','Vinevale Ave 523','Inactive'),(42,'Sara','Martin','smartin@mail.com','1053472123','4TCU1J','Female','Folsom St 3210','Active');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-17  0:56:20
