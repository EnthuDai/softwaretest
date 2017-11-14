-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: software_test
-- ------------------------------------------------------
-- Server version	5.7.18

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
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrator` (
  `name` char(32) NOT NULL,
  `password` char(128) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES ('admin','admin');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `change_submission`
--

DROP TABLE IF EXISTS `change_submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `change_submission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submission_id` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `payment` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `change_submission_submission_idx` (`submission_id`),
  CONSTRAINT `change_submission_submission` FOREIGN KEY (`submission_id`) REFERENCES `submission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `change_submission`
--

LOCK TABLES `change_submission` WRITE;
/*!40000 ALTER TABLE `change_submission` DISABLE KEYS */;
INSERT INTO `change_submission` VALUES (1,58,1,10),(2,59,1,100),(3,60,1,100),(4,60,2,90),(5,61,1,100),(6,61,2,80),(7,62,1,100),(8,62,2,80),(9,63,1,100),(10,63,3,10),(11,64,1,100),(12,64,3,10),(13,65,1,29),(14,65,3,19),(15,66,1,20),(16,67,1,20),(17,91,1,10),(18,92,1,10),(19,94,0,99),(20,94,0,100),(21,94,0,101),(22,94,0,0),(23,94,0,1),(24,94,0,2),(25,94,1,99),(26,94,1,100),(27,94,1,101),(28,94,1,0),(29,94,1,1),(30,94,1,2),(31,95,0,99),(32,95,0,100),(33,95,0,101),(34,95,0,0),(35,95,0,1),(36,95,0,2),(37,95,1,99),(38,95,1,100),(39,95,1,101),(40,95,1,0),(41,95,1,1),(42,95,1,2),(43,95,2,1),(44,95,1,1),(45,95,1,2),(46,95,2,1),(47,95,1,99),(48,96,0,99),(49,96,0,100),(50,96,0,101),(51,96,0,0),(52,96,0,1),(53,96,0,2),(54,96,1,99),(55,96,1,100),(56,96,1,101),(57,96,1,0),(58,96,1,1),(59,96,1,2),(60,96,2,1),(61,96,1,1),(62,96,1,2),(63,96,2,1),(64,96,1,99),(65,96,2,99),(66,96,2,100),(67,96,2,101),(68,96,2,0),(69,96,2,1),(70,96,2,2),(71,97,0,99),(72,97,0,100),(73,97,0,101),(74,97,0,0),(75,97,0,1),(76,97,0,2),(77,97,1,99),(78,97,1,100),(79,97,1,101),(80,97,1,0),(81,97,1,1),(82,97,1,2),(83,97,2,1),(84,97,1,1),(85,97,1,2),(86,97,2,1),(87,97,1,99),(88,97,2,99),(89,97,2,100),(90,97,2,101),(91,97,2,0),(92,97,2,1),(93,97,2,2),(94,98,0,99),(95,98,0,100),(96,98,0,101),(97,98,0,0),(98,98,0,1),(99,98,0,2),(100,98,1,99),(101,98,1,100),(102,98,1,101),(103,98,1,0),(104,98,1,1),(105,98,1,2),(106,98,2,1),(107,98,1,1),(108,98,1,2),(109,98,2,1),(110,98,1,99),(111,98,2,99),(112,98,2,100),(113,98,2,101),(114,98,2,0),(115,98,2,1),(116,98,2,2),(117,99,0,99),(118,99,0,100),(119,99,0,101),(120,99,0,0),(121,99,0,1),(122,99,0,2),(123,99,1,99),(124,99,1,100),(125,99,1,101),(126,99,1,0),(127,99,1,1),(128,99,1,2),(129,99,2,1),(130,99,1,1),(131,99,1,2),(132,99,2,1),(133,99,1,99),(134,99,2,99),(135,99,2,100),(136,99,2,101),(137,99,2,0),(138,99,2,1),(139,99,2,2),(140,99,99,1),(141,99,100,1),(142,99,101,1),(143,101,0,99),(144,101,0,100),(145,101,0,101),(146,101,0,0),(147,101,0,1),(148,101,0,2),(149,101,1,99),(150,101,1,100),(151,101,1,101),(152,101,1,0),(153,101,1,1),(154,102,0,99),(155,102,0,100),(156,102,0,101),(157,102,0,0),(158,102,0,1),(159,102,0,2),(160,102,1,99),(161,102,1,100),(162,102,1,101),(163,102,1,0),(164,102,1,1),(165,102,1,2),(166,102,2,1),(167,102,1,1),(168,102,1,2),(169,102,2,1),(170,103,0,99),(171,103,0,100),(172,104,0,99),(173,104,0,100),(174,104,0,101),(175,104,0,0),(176,104,0,1),(177,105,0,99),(178,105,0,100),(179,105,0,101),(180,105,0,0),(181,105,0,1),(182,105,0,2),(183,105,1,99),(184,105,1,100);
/*!40000 ALTER TABLE `change_submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `session` int(11) NOT NULL,
  `major` char(32) NOT NULL,
  `name` char(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,14,'软件工程','14软件2班'),(7,14,'软件工程','14软件1班'),(8,15,'软件工程','软件1班'),(9,15,'软件工程','15软件3班'),(10,15,'土木工程','15土木2班'),(15,16,'计算机','计算机1班');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logic_submission`
--

DROP TABLE IF EXISTS `logic_submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logic_submission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submission_id` int(11) NOT NULL,
  `type` int(11) NOT NULL COMMENT '用于标识逻辑覆盖的种类\n1表示语句覆盖\n2表示分支覆盖\n3表示条件覆盖\n4表示分支/条件覆盖\n5表示条件组合覆盖\n6表示路径覆盖',
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `login_submission_submission_idx` (`submission_id`),
  CONSTRAINT `login_submission_submission` FOREIGN KEY (`submission_id`) REFERENCES `submission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=476 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logic_submission`
--

LOCK TABLES `logic_submission` WRITE;
/*!40000 ALTER TABLE `logic_submission` DISABLE KEYS */;
INSERT INTO `logic_submission` VALUES (1,71,1,2,3),(2,71,2,3,5),(3,72,1,0,0),(4,72,1,1,0),(5,72,1,2,3),(6,72,1,3,2),(7,72,1,6,4),(8,72,2,3,5),(9,73,1,1,1),(10,74,1,0,0),(11,74,1,1,0),(12,74,1,2,3),(13,74,1,3,2),(14,74,1,6,4),(15,75,1,0,0),(16,75,1,1,0),(17,75,1,2,3),(18,75,1,3,2),(19,75,1,6,4),(20,75,2,0,0),(21,75,2,1,0),(22,75,2,2,3),(23,75,2,3,2),(24,75,2,6,4),(25,75,3,0,0),(26,75,3,101,0),(27,75,3,1,0),(28,75,3,1,101),(29,75,3,2,3),(30,75,3,3,2),(31,75,3,6,4),(32,75,3,21,17),(33,75,4,0,0),(34,75,4,101,0),(35,75,4,1,0),(36,75,4,1,101),(37,75,4,2,3),(38,75,4,3,2),(39,75,4,6,4),(40,75,4,21,17),(41,75,5,0,0),(42,75,5,101,0),(43,75,5,1,0),(44,75,5,1,101),(45,75,5,2,3),(46,75,5,3,2),(47,75,5,6,4),(48,75,5,21,17),(49,75,6,21,6),(50,75,6,9,21),(51,75,6,0,21),(52,75,6,9,221),(53,76,1,0,0),(54,76,1,1,0),(55,76,1,2,3),(56,76,1,3,2),(57,76,1,6,4),(58,76,2,0,0),(59,76,2,1,0),(60,76,2,2,3),(61,76,2,3,2),(62,76,2,6,4),(63,76,3,0,0),(64,76,3,101,0),(65,76,3,1,0),(66,76,3,1,101),(67,76,3,2,3),(68,76,3,3,2),(69,76,3,6,4),(70,76,3,21,17),(71,76,4,0,0),(72,76,4,101,0),(73,76,4,1,0),(74,76,4,1,101),(75,76,4,2,3),(76,76,4,3,2),(77,76,4,6,4),(78,76,4,21,17),(79,76,5,0,0),(80,76,5,101,0),(81,76,5,1,0),(82,76,5,1,101),(83,76,5,2,3),(84,76,5,3,2),(85,76,5,6,4),(86,76,5,21,17),(87,76,6,21,6),(88,76,6,9,21),(89,76,6,0,21),(90,76,6,9,221),(91,77,1,0,0),(92,77,1,1,0),(93,77,1,2,3),(94,77,1,3,2),(95,77,1,6,4),(96,77,2,0,0),(97,77,2,1,0),(98,77,2,2,3),(99,77,2,3,2),(100,77,2,6,4),(101,77,3,0,0),(102,77,3,101,0),(103,77,3,1,0),(104,77,3,1,101),(105,77,3,2,3),(106,77,3,3,2),(107,77,3,6,4),(108,77,3,21,17),(109,77,4,0,0),(110,77,4,101,0),(111,77,4,1,0),(112,77,4,1,101),(113,77,4,2,3),(114,77,4,3,2),(115,77,4,6,4),(116,77,4,21,17),(117,77,5,0,0),(118,77,5,101,0),(119,77,5,1,0),(120,77,5,1,101),(121,77,5,2,3),(122,77,5,3,2),(123,77,5,6,4),(124,77,5,21,17),(125,77,6,21,6),(126,77,6,9,21),(127,77,6,0,21),(128,77,6,9,221),(129,78,1,0,0),(130,78,1,1,0),(131,78,1,2,3),(132,78,1,3,2),(133,78,1,6,4),(134,78,2,0,0),(135,78,2,1,0),(136,78,2,2,3),(137,78,2,3,2),(138,78,2,6,4),(139,78,3,0,0),(140,78,3,101,0),(141,78,3,1,0),(142,78,3,1,101),(143,78,3,2,3),(144,78,3,3,2),(145,78,3,6,4),(146,78,3,21,17),(147,78,4,0,0),(148,78,4,101,0),(149,78,4,1,0),(150,78,4,1,101),(151,78,4,2,3),(152,78,4,3,2),(153,78,4,6,4),(154,78,4,21,17),(155,78,5,0,0),(156,78,5,101,0),(157,78,5,1,0),(158,78,5,1,101),(159,78,5,2,3),(160,78,5,3,2),(161,78,5,6,4),(162,78,5,21,17),(163,78,6,21,6),(164,78,6,9,21),(165,78,6,0,21),(166,78,6,9,221),(167,79,1,0,0),(168,79,1,1,0),(169,79,1,2,3),(170,79,1,3,2),(171,79,1,6,4),(172,79,2,0,0),(173,79,2,1,0),(174,79,2,2,3),(175,79,2,3,2),(176,79,2,6,4),(177,79,3,0,0),(178,79,3,101,0),(179,79,3,1,0),(180,79,3,1,101),(181,79,3,2,3),(182,79,3,3,2),(183,79,3,6,4),(184,79,3,21,17),(185,79,4,0,0),(186,79,4,101,0),(187,79,4,1,0),(188,79,4,1,101),(189,79,4,2,3),(190,79,4,3,2),(191,79,4,6,4),(192,79,4,21,17),(193,79,5,0,0),(194,79,5,101,0),(195,79,5,1,0),(196,79,5,1,101),(197,79,5,2,3),(198,79,5,3,2),(199,79,5,6,4),(200,79,5,21,17),(201,79,6,21,6),(202,79,6,9,21),(203,79,6,0,21),(204,79,6,9,221),(205,80,1,0,0),(206,80,1,1,0),(207,80,1,2,3),(208,80,1,3,2),(209,80,1,6,4),(210,80,2,0,0),(211,80,2,1,0),(212,80,2,2,3),(213,80,2,3,2),(214,80,2,6,4),(215,80,3,0,0),(216,80,3,101,0),(217,80,3,1,0),(218,80,3,1,101),(219,80,3,2,3),(220,80,3,3,2),(221,80,3,6,4),(222,80,3,21,17),(223,80,4,0,0),(224,80,4,101,0),(225,80,4,1,0),(226,80,4,1,101),(227,80,4,2,3),(228,80,4,3,2),(229,80,4,6,4),(230,80,4,21,17),(231,80,5,0,0),(232,80,5,101,0),(233,80,5,1,0),(234,80,5,1,101),(235,80,5,2,3),(236,80,5,3,2),(237,80,5,6,4),(238,80,5,21,17),(239,80,6,21,6),(240,80,6,9,21),(241,80,6,0,21),(242,80,6,9,221),(243,81,1,0,0),(244,81,1,1,0),(245,81,1,2,3),(246,81,1,3,2),(247,81,1,6,4),(248,81,2,0,0),(249,81,2,1,0),(250,81,2,2,3),(251,81,2,3,2),(252,81,2,6,4),(253,81,3,0,0),(254,81,3,101,0),(255,81,3,1,0),(256,81,3,1,101),(257,81,3,2,3),(258,81,3,3,2),(259,81,3,6,4),(260,81,3,21,17),(261,81,4,0,0),(262,81,4,101,0),(263,81,4,1,0),(264,81,4,1,101),(265,81,4,2,3),(266,81,4,3,2),(267,81,4,6,4),(268,81,4,21,17),(269,81,5,0,0),(270,81,5,101,0),(271,81,5,1,0),(272,81,5,1,101),(273,81,5,2,3),(274,81,5,3,2),(275,81,5,6,4),(276,81,5,21,17),(277,81,6,21,6),(278,81,6,9,21),(279,81,6,0,21),(280,81,6,9,221),(281,82,1,0,0),(282,82,1,1,0),(283,82,1,2,3),(284,82,1,3,2),(285,82,1,6,4),(286,82,2,0,0),(287,82,2,1,0),(288,82,2,2,3),(289,82,2,3,2),(290,82,2,6,4),(291,82,3,0,0),(292,82,3,101,0),(293,82,3,1,0),(294,82,3,1,101),(295,82,3,2,3),(296,82,3,3,2),(297,82,3,6,4),(298,82,3,21,17),(299,82,4,0,0),(300,82,4,101,0),(301,82,4,1,0),(302,82,4,1,101),(303,82,4,2,3),(304,82,4,3,2),(305,82,4,6,4),(306,82,4,21,17),(307,82,5,0,0),(308,82,5,101,0),(309,82,5,1,0),(310,82,5,1,101),(311,82,5,2,3),(312,82,5,3,2),(313,82,5,6,4),(314,82,5,21,17),(315,82,6,21,6),(316,82,6,9,21),(317,82,6,0,21),(318,82,6,9,221),(319,83,1,0,0),(320,83,1,1,0),(321,83,1,2,3),(322,83,1,3,2),(323,83,1,6,4),(324,84,1,0,0),(325,84,1,1,0),(326,83,2,0,0),(327,85,1,0,0),(328,83,2,1,0),(329,84,1,2,3),(330,85,1,1,0),(331,84,1,3,2),(332,83,2,2,3),(333,85,1,2,3),(334,84,1,6,4),(335,83,2,3,2),(336,86,1,0,0),(337,85,1,3,2),(338,84,2,0,0),(339,83,2,6,4),(340,86,1,1,0),(341,85,1,6,4),(342,83,3,0,0),(343,84,2,1,0),(344,86,1,2,3),(345,85,2,0,0),(346,83,3,101,0),(347,84,2,2,3),(348,85,2,1,0),(349,86,1,3,2),(350,83,3,1,0),(351,84,2,3,2),(352,86,1,6,4),(353,85,2,2,3),(354,83,3,1,101),(355,84,2,6,4),(356,85,2,3,2),(357,86,2,0,0),(358,84,3,0,0),(359,83,3,2,3),(360,86,2,1,0),(361,85,2,6,4),(362,84,3,101,0),(363,83,3,3,2),(364,85,3,0,0),(365,86,2,2,3),(366,83,3,6,4),(367,84,3,1,0),(368,86,2,3,2),(369,85,3,101,0),(370,84,3,1,101),(371,83,3,21,17),(372,85,3,1,0),(373,86,2,6,4),(374,84,3,2,3),(375,83,4,0,0),(376,85,3,1,101),(377,86,3,0,0),(378,84,3,3,2),(379,83,4,101,0),(380,85,3,2,3),(381,86,3,101,0),(382,83,4,1,0),(383,84,3,6,4),(384,86,3,1,0),(385,85,3,3,2),(386,83,4,1,101),(387,84,3,21,17),(388,85,3,6,4),(389,86,3,1,101),(390,83,4,2,3),(391,84,4,0,0),(392,86,3,2,3),(393,85,3,21,17),(394,83,4,3,2),(395,85,4,0,0),(396,84,4,101,0),(397,86,3,3,2),(398,83,4,6,4),(399,85,4,101,0),(400,84,4,1,0),(401,83,4,21,17),(402,86,3,6,4),(403,85,4,1,0),(404,83,5,0,0),(405,86,3,21,17),(406,84,4,1,101),(407,85,4,1,101),(408,83,5,101,0),(409,84,4,2,3),(410,86,4,0,0),(411,85,4,2,3),(412,83,5,1,0),(413,84,4,3,2),(414,86,4,101,0),(415,85,4,3,2),(416,84,4,6,4),(417,83,5,1,101),(418,86,4,1,0),(419,85,4,6,4),(420,83,5,2,3),(421,86,4,1,101),(422,84,4,21,17),(423,85,4,21,17),(424,86,4,2,3),(425,83,5,3,2),(426,84,5,0,0),(427,85,5,0,0),(428,83,5,6,4),(429,86,4,3,2),(430,84,5,101,0),(431,85,5,101,0),(432,83,5,21,17),(433,84,5,1,0),(434,86,4,6,4),(435,85,5,1,0),(436,83,6,21,6),(437,86,4,21,17),(438,84,5,1,101),(439,85,5,1,101),(440,86,5,0,0),(441,84,5,2,3),(442,83,6,9,21),(443,85,5,2,3),(444,84,5,3,2),(445,86,5,101,0),(446,83,6,0,21),(447,85,5,3,2),(448,83,6,9,221),(449,84,5,6,4),(450,86,5,1,0),(451,85,5,6,4),(452,84,5,21,17),(453,86,5,1,101),(454,85,5,21,17),(455,84,6,21,6),(456,86,5,2,3),(457,85,6,21,6),(458,84,6,9,21),(459,86,5,3,2),(460,85,6,9,21),(461,86,5,6,4),(462,84,6,0,21),(463,85,6,0,21),(464,86,5,21,17),(465,84,6,9,221),(466,85,6,9,221),(467,86,6,21,6),(468,86,6,9,21),(469,86,6,0,21),(470,86,6,9,221),(471,93,1,0,0),(472,93,1,1,0),(473,93,1,2,3),(474,93,1,3,2),(475,93,1,6,4);
/*!40000 ALTER TABLE `logic_submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'日期推算','有一个日期推算程序，该程序的功能是输入一个日期，输出该日期后天的日期，例如输入2013年1月1日，则输出2013年1月3日。现假设程序已经被开发出来，请对该软件的可执行程序进行功能测试，要求用尽可能少的测试用例检测出尽可能多的软件缺陷。'),(2,'找零钱','q'),(3,'逻辑覆盖',NULL);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rqts_submission`
--

DROP TABLE IF EXISTS `rqts_submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rqts_submission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submission_id` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `month` smallint(2) DEFAULT NULL,
  `day` smallint(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rqts_submission_submission_idx` (`submission_id`),
  CONSTRAINT `rqts_submission_submission` FOREIGN KEY (`submission_id`) REFERENCES `submission` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rqts_submission`
--

LOCK TABLES `rqts_submission` WRITE;
/*!40000 ALTER TABLE `rqts_submission` DISABLE KEYS */;
INSERT INTO `rqts_submission` VALUES (1,NULL,2012,1,1),(2,NULL,2012,1,1),(3,NULL,2011,1,3),(4,NULL,2932,1,1),(5,NULL,2934,2,2),(6,NULL,2012,1,1),(7,NULL,2013,2,2),(8,NULL,2087,2,2),(9,NULL,2012,1,1),(10,NULL,2012,1,1),(11,NULL,2012,1,1),(12,NULL,2012,1,1),(13,NULL,222,2,2),(14,NULL,2011,1,1),(15,NULL,2011,1,1),(16,NULL,2222,2,2),(17,NULL,2012,2,2),(18,NULL,2012,1,1),(19,NULL,2100,2,2),(20,NULL,222,2,2),(21,NULL,1,1,1),(22,NULL,2012,1,1),(23,NULL,2012,1,1),(24,NULL,2012,1,1),(25,NULL,2012,1,1),(26,NULL,2012,1,1),(27,NULL,2012,1,1),(28,NULL,2012,1,1),(29,NULL,2012,1,1),(30,NULL,2010,1,1),(31,NULL,2010,1,1),(32,NULL,2010,1,1),(33,NULL,2010,1,1),(34,NULL,1,1,1),(35,NULL,1,1,1),(36,NULL,1,1,1),(37,NULL,1,1,2),(38,NULL,1,1,2),(39,NULL,1,1,2),(40,NULL,1,1,1),(41,NULL,1,1,1),(42,NULL,1,1,1),(43,NULL,1,1,2),(44,NULL,1,2,3),(45,NULL,1,2,4),(46,NULL,2016,2,31),(47,NULL,2016,1,31),(48,NULL,2016,12,31),(49,NULL,2016,2,30),(50,NULL,2016,1,30),(51,NULL,2016,4,30),(52,NULL,2016,12,30),(53,NULL,2016,2,29),(54,NULL,2016,1,29),(55,NULL,2016,4,29),(56,NULL,2017,1,1),(57,NULL,2017,2,28),(58,NULL,2017,2,29),(59,NULL,2017,2,27),(60,NULL,2017,1,29),(61,NULL,2017,12,30),(62,NULL,2017,12,31),(63,NULL,2016,1,27),(64,NULL,2017,4,31),(65,NULL,2016,2,27),(66,NULL,2016,2,28),(67,NULL,2016,2,31),(68,NULL,2016,1,31),(69,NULL,2016,12,31),(70,NULL,2016,2,30),(71,NULL,2016,1,30),(72,NULL,2016,4,30),(73,NULL,2016,12,30),(74,NULL,2016,2,29),(75,NULL,2016,1,29),(76,NULL,2016,4,29),(77,NULL,2017,1,1),(78,NULL,2017,2,28),(79,NULL,2017,2,29),(80,NULL,2017,2,27),(81,NULL,2017,1,29),(82,NULL,2017,12,30),(83,NULL,2017,12,31),(84,NULL,2016,1,27),(85,NULL,2017,4,31),(86,NULL,2016,2,27),(87,NULL,2012,1,1),(88,NULL,1,1,1),(89,NULL,1,1,2),(90,NULL,2012,1,1),(91,NULL,2932,1,2),(92,NULL,2012,1,1),(93,NULL,1,2,2),(94,NULL,1,1,1),(95,NULL,1,1,1),(96,NULL,1,1,2),(97,53,2012,1,1),(98,54,2012,1,1),(99,54,2012,1,1),(100,55,2012,1,1),(101,55,2012,1,1),(102,55,2012,1,1),(103,100,2011,111,1),(104,100,2016,1,31),(105,100,2016,12,31),(106,100,2016,2,30),(107,100,2016,1,30),(108,100,2016,4,30),(109,100,2016,12,30),(110,100,2016,2,29),(111,100,2016,1,29),(112,100,2016,4,29),(113,100,2017,1,1),(114,100,2017,2,28),(115,100,2017,2,29),(116,100,2017,2,27),(117,100,2017,1,29),(118,100,2017,12,30),(119,100,2017,12,31),(120,100,2016,1,27),(121,100,2017,4,31),(122,100,2016,2,27),(123,100,2016,2,28),(124,106,1111,1,1);
/*!40000 ALTER TABLE `rqts_submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` char(16) NOT NULL,
  `name` char(32) NOT NULL,
  `classes` int(11) NOT NULL,
  `password` char(128) NOT NULL DEFAULT '123456',
  PRIMARY KEY (`id`),
  KEY `stu_cla_idx` (`classes`),
  CONSTRAINT `stu_cla` FOREIGN KEY (`classes`) REFERENCES `classes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('1412101056','戴向勇',1,'1234567'),('1412101058','58',1,'123456'),('1412101060','60',1,'123456'),('1412101062','62',1,'123456'),('1412101064','1412101064',1,'123456'),('1412101068','1412101068',1,'123456'),('1412111111','小号',8,'123456'),('1512101034','小明',8,'123456'),('1512101099','小红',8,'123456');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `student_classes_view`
--

DROP TABLE IF EXISTS `student_classes_view`;
/*!50001 DROP VIEW IF EXISTS `student_classes_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `student_classes_view` AS SELECT 
 1 AS `studentId`,
 1 AS `studentName`,
 1 AS `classId`,
 1 AS `className`,
 1 AS `session`,
 1 AS `major`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `student_max_score`
--

DROP TABLE IF EXISTS `student_max_score`;
/*!50001 DROP VIEW IF EXISTS `student_max_score`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `student_max_score` AS SELECT 
 1 AS `studentId`,
 1 AS `questionId`,
 1 AS `score`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `student_max_score_view`
--

DROP TABLE IF EXISTS `student_max_score_view`;
/*!50001 DROP VIEW IF EXISTS `student_max_score_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `student_max_score_view` AS SELECT 
 1 AS `studentId`,
 1 AS `studentName`,
 1 AS `classId`,
 1 AS `className`,
 1 AS `session`,
 1 AS `major`,
 1 AS `questionId`,
 1 AS `score`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `submission`
--

DROP TABLE IF EXISTS `submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `submission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` char(16) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `submit_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `submission_student_idx` (`student_id`),
  KEY `submission_question_idx` (`question_id`),
  CONSTRAINT `submission_question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `submission_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submission`
--

LOCK TABLES `submission` WRITE;
/*!40000 ALTER TABLE `submission` DISABLE KEYS */;
INSERT INTO `submission` VALUES (1,'1412101056',1,100,'2017-07-24 07:14:48'),(2,'1412101056',1,100,'2017-07-24 07:20:00'),(3,'1412101056',1,5,'2017-07-24 07:22:08'),(4,'1412101056',1,5,'2017-07-24 08:28:38'),(5,'1412101056',1,5,'2017-07-24 10:20:12'),(6,'1412101056',1,5,'2017-07-24 10:21:06'),(7,'1412101056',1,5,'2017-07-24 10:24:07'),(8,'1412101056',1,5,'2017-07-24 10:27:53'),(9,'1412101056',1,5,'2017-07-24 10:31:42'),(10,'1412101056',1,5,'2017-07-24 10:40:07'),(11,'1412101056',1,5,'2017-07-24 10:40:08'),(12,'1412101056',1,5,'2017-07-24 10:42:29'),(13,'1412101056',1,5,'2017-07-24 10:43:17'),(14,'1412101056',1,5,'2017-07-24 10:45:15'),(15,'1412101056',1,5,'2017-07-24 10:46:28'),(16,'1412101056',1,5,'2017-07-24 10:47:39'),(17,'1412101056',1,5,'2017-07-24 10:48:22'),(18,'1412101056',1,5,'2017-07-24 10:52:18'),(19,'1412101056',1,5,'2017-07-24 10:52:50'),(20,'1412101056',1,5,'2017-07-24 11:08:57'),(21,'1412101056',1,5,'2017-07-24 11:18:58'),(22,'1412101056',1,5,'2017-07-24 11:21:18'),(23,'1412101056',1,5,'2017-07-24 11:21:22'),(24,'1412101056',1,5,'2017-07-24 11:21:24'),(25,'1412101056',1,5,'2017-07-24 11:21:35'),(26,'1412101056',1,5,'2017-07-24 11:23:49'),(27,'1412101056',1,5,'2017-07-24 11:23:55'),(28,'1412101056',1,5,'2017-07-24 11:23:58'),(29,'1412101056',1,5,'2017-07-24 11:24:00'),(30,'1412101056',1,5,'2017-07-24 11:28:44'),(31,'1412101056',1,5,'2017-07-24 11:28:47'),(32,'1412101056',1,5,'2017-07-24 11:29:49'),(33,'1412101056',1,5,'2017-07-24 11:30:01'),(34,'1412101056',1,5,'2017-07-24 11:30:04'),(35,'1412101056',1,5,'2017-07-24 11:30:05'),(36,'1412101056',1,5,'2017-07-24 11:31:10'),(37,'1412101056',1,5,'2017-07-24 11:31:25'),(38,'1412101056',1,5,'2017-07-24 11:35:53'),(39,'1412101056',1,5,'2017-07-24 11:36:01'),(40,'1412101056',1,5,'2017-07-24 11:40:11'),(41,'1412101056',1,5,'2017-07-24 11:40:30'),(42,'1412101056',1,100,'2017-07-24 11:40:53'),(43,'1412101056',1,94,'2017-07-24 11:41:06'),(44,'1412101056',1,5,'2017-07-27 14:35:02'),(45,'1412101056',1,5,'2017-07-27 14:42:03'),(46,'1412101056',1,5,'2017-07-27 14:42:11'),(47,'1412101056',1,5,'2017-07-27 15:00:19'),(48,'1412101056',1,5,'2017-07-27 15:09:46'),(49,'1412101056',1,5,'2017-07-27 15:15:19'),(50,'1412101056',1,5,'2017-07-27 15:16:19'),(51,'1412101056',1,5,'2017-08-03 03:08:37'),(52,'1412101056',1,5,'2017-08-03 03:08:49'),(53,'1412101056',1,5,'2017-08-10 04:47:54'),(54,'1412101056',1,5,'2017-08-10 04:48:34'),(55,'1412111111',1,5,'2017-08-10 05:31:26'),(56,'1412111111',2,15,NULL),(57,'1412111111',2,1,NULL),(58,'1412111111',2,5,'2017-08-15 10:43:01'),(59,'1412111111',2,16,'2017-08-15 11:01:31'),(60,'1412111111',2,22,'2017-08-15 11:02:20'),(61,'1412111111',2,22,'2017-08-15 11:14:20'),(62,'1412111111',2,22,'2017-08-15 11:15:24'),(63,'1412111111',2,16,'2017-08-15 11:16:53'),(64,'1412111111',2,16,'2017-08-15 11:17:06'),(65,'1412111111',2,5,'2017-08-15 11:19:53'),(66,'1412111111',2,5,'2017-08-15 11:24:12'),(67,'1412101056',2,5,'2017-08-15 11:27:12'),(69,'1412101056',3,0,'2017-08-18 11:34:14'),(70,'1412101056',3,0,'2017-08-18 11:34:25'),(71,'1412101056',3,0,'2017-08-18 11:36:03'),(72,'1412101056',3,16,'2017-08-18 11:37:24'),(73,'1412101056',3,0,'2017-08-18 11:45:54'),(74,'1412101056',3,16,'2017-08-18 11:47:47'),(75,'1412101056',3,100,'2017-08-18 11:54:23'),(76,'1412101056',3,100,'2017-08-18 11:55:44'),(77,'1412101056',3,100,'2017-08-18 11:55:50'),(78,'1412101056',3,100,'2017-08-18 11:55:53'),(79,'1412101056',3,100,'2017-08-18 11:56:02'),(80,'1412101056',3,100,'2017-08-18 11:56:06'),(81,'1412101056',3,100,'2017-08-18 11:56:10'),(82,'1412101056',3,100,'2017-08-18 11:56:23'),(83,'1412101056',3,100,'2017-08-18 11:56:33'),(84,'1412101056',3,100,'2017-08-18 11:56:33'),(85,'1412101056',3,100,'2017-08-18 11:56:34'),(86,'1412101056',3,100,'2017-08-18 11:56:34'),(87,'1412101056',3,0,'2017-08-18 12:00:35'),(88,'1412101056',3,0,'2017-08-18 12:01:09'),(89,'1412101056',3,0,'2017-08-18 12:01:22'),(90,'1412101056',3,0,'2017-08-18 12:01:24'),(91,'1412101056',2,5,'2017-08-20 08:17:05'),(92,'1412101062',2,5,'2017-08-20 08:26:46'),(93,'1412101062',3,16,'2017-08-20 08:27:42'),(94,'1412101060',2,77,'2017-08-20 14:07:47'),(95,'1412101062',2,83,'2017-08-20 14:10:22'),(96,'1412101062',2,83,'2017-08-20 14:11:54'),(97,'1412101062',2,83,'2017-08-20 14:12:17'),(98,'1412101062',2,83,'2017-08-20 14:14:40'),(99,'1412101062',2,100,'2017-08-20 14:17:44'),(100,'1412101062',1,100,'2017-08-20 14:19:10'),(101,'1412101064',2,77,'2017-08-20 14:21:41'),(102,'1412101064',2,83,'2017-08-20 14:22:15'),(103,'1412101058',2,27,'2017-08-20 14:23:26'),(104,'1412101058',2,55,'2017-08-20 14:23:36'),(105,'1412101058',2,62,'2017-08-20 14:23:46'),(106,'1412101064',1,5,'2017-09-03 11:57:42'),(107,'1412101064',1,0,'2017-09-03 12:56:07');
/*!40000 ALTER TABLE `submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `submission_question_view`
--

DROP TABLE IF EXISTS `submission_question_view`;
/*!50001 DROP VIEW IF EXISTS `submission_question_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `submission_question_view` AS SELECT 
 1 AS `submissionId`,
 1 AS `studentId`,
 1 AS `questionId`,
 1 AS `questionTitle`,
 1 AS `score`,
 1 AS `submitTime`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `student_classes_view`
--

/*!50001 DROP VIEW IF EXISTS `student_classes_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `student_classes_view` AS select `student`.`id` AS `studentId`,`student`.`name` AS `studentName`,`classes`.`id` AS `classId`,`classes`.`name` AS `className`,`classes`.`session` AS `session`,`classes`.`major` AS `major` from (`classes` join `student`) where (`student`.`classes` = `classes`.`id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `student_max_score`
--

/*!50001 DROP VIEW IF EXISTS `student_max_score`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `student_max_score` AS select `submission`.`student_id` AS `studentId`,`submission`.`question_id` AS `questionId`,max(`submission`.`score`) AS `score` from (`submission` join `question` on((`submission`.`question_id` = `question`.`id`))) where (`submission`.`question_id` = `question`.`id`) group by `submission`.`question_id`,`submission`.`student_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `student_max_score_view`
--

/*!50001 DROP VIEW IF EXISTS `student_max_score_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `student_max_score_view` AS select `student_classes_view`.`studentId` AS `studentId`,`student_classes_view`.`studentName` AS `studentName`,`student_classes_view`.`classId` AS `classId`,`student_classes_view`.`className` AS `className`,`student_classes_view`.`session` AS `session`,`student_classes_view`.`major` AS `major`,`student_max_score`.`questionId` AS `questionId`,`student_max_score`.`score` AS `score` from (`student_classes_view` join `student_max_score`) where (`student_classes_view`.`studentId` = `student_max_score`.`studentId`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `submission_question_view`
--

/*!50001 DROP VIEW IF EXISTS `submission_question_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `submission_question_view` AS select `submission`.`id` AS `submissionId`,`submission`.`student_id` AS `studentId`,`submission`.`question_id` AS `questionId`,`question`.`title` AS `questionTitle`,`submission`.`score` AS `score`,`submission`.`submit_time` AS `submitTime` from (`submission` join `question`) where (`submission`.`question_id` = `question`.`id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-14  9:14:17
