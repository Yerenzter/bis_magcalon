-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2025 at 03:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bis_magcalon`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(100) NOT NULL,
  `username` varchar(64) DEFAULT NULL,
  `passphrase` varchar(64) DEFAULT NULL,
  `role` varchar(16) DEFAULT NULL,
  `creation` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `passphrase`, `role`, `creation`) VALUES
(1, 'system', 'system-wizard-secret123', 'System', '0000-00-00'),
(2, 'admin', 'admin', 'Admin', '0000-00-00'),
(3, 'bulk-test1', 'bt1-123', 'Admin', '0000-00-00'),
(4, 'bulk-test2', 'bt2-123', 'Admin', '0000-00-00'),
(5, 'bulk-test3', 'bt3-123', 'Admin', '0000-00-00'),
(6, 'yerenzter', 'yerenzter', 'Admin', '0000-00-00'),
(7, 'wunderkatze_2024', 'n0w_u_c4n_s33_mein_hUh', 'Personnel', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `residents`
--

CREATE TABLE `residents` (
  `id` int(100) NOT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `middlename` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `age` int(100) DEFAULT NULL,
  `sex` varchar(16) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `civilstatus` varchar(16) DEFAULT NULL,
  `occupation` varchar(32) DEFAULT NULL,
  `purok` varchar(16) DEFAULT NULL,
  `contactnumber` varchar(11) DEFAULT NULL,
  `information` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`information`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `residents`
--

INSERT INTO `residents` (`id`, `firstname`, `middlename`, `lastname`, `age`, `sex`, `birthday`, `civilstatus`, `occupation`, `purok`, `contactnumber`, `information`) VALUES
(1, 'Marc Joseff', 'Flores', 'Umiten', 0, 'Male', '2003-01-01', 'Single', 'Student', '1', '09943494324', '{\"name\":[],\"url\":[]}'),
(2, 'Renzter', 'Arisga', 'Arizala', 0, 'Female', '2003-10-02', 'Single', 'Student', '1', '0987654321', '{\"name\":[],\"url\":[]}'),
(3, 'John', 'Peter', 'Doe', 0, 'Male', '2000-05-29', 'Single', 'Pilot', '1', '09876543210', '{\"name\":[],\"url\":[]}'),
(4, 'Princess Everly', 'Flores', 'Umiten', 0, 'Female', '2011-08-20', 'Single', 'Artist', '1', '09876543210', '{\"name\":[],\"url\":[]}'),
(5, 'Pedro', 'Pedro', 'Pedro', 0, 'Male', '1999-04-04', 'Single', 'Artist', '1', '09876543210', '{\"name\":[],\"url\":[]}'),
(6, 'Tyron', 'Haust', 'Baffen', 0, 'Male', '1980-06-24', 'Single', 'Architect', '1', '09876543210', '{\"name\":[],\"url\":[]}'),
(7, 'Dessmark', 'Pajate', 'Napuli', 0, 'Male', '2004-01-11', 'Single', 'Student', '1', '09876543210', '{\"name\":[],\"url\":[]}'),
(8, 'Mark Dominick', 'Flores', 'Umiten', 0, 'Male', '2004-11-19', 'Single', 'Engineer', '1', '09876543210', '{\"name\":[],\"url\":[]}'),
(9, 'Pablo', 'Paulo', 'Paulante', 0, 'Male', '1989-08-24', 'Married', 'Retailer', '5', '09876543210', '{\"name\":[],\"url\":[]}'),
(10, 'Juan', 'Carlos', 'dela Cruz', 0, 'Male', '1994-09-17', 'Widowed', 'Retailer', '7', '09876543210', '{\"name\":[],\"url\":[]}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `residents`
--
ALTER TABLE `residents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `residents`
--
ALTER TABLE `residents`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
