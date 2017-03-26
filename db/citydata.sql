-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 26 Mars 2017 à 18:14
-- Version du serveur :  10.1.19-MariaDB
-- Version de PHP :  5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `citydata`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `area`
--

CREATE TABLE `area` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `libelle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `area`
--

INSERT INTO `area` (`id`, `code`, `libelle`) VALUES
(1, '543950101', 'Haut-du-Lievre Nord Gentilly'),
(2, '543950102', 'Haut-du-Lievre Tamaris Tilleul Argente'),
(3, '543950103', 'Haut-du-Lievre Blanc Sycomore'),
(4, '543950201', 'Cure d''Air'),
(5, '543950202', 'Boufflers Sud-Ouest Beauregard'),
(6, '543950203', 'Buthegnemont'),
(7, '543950301', 'Colline Scarpone'),
(8, '543950302', 'Colline Boudonville'),
(9, '543950303', 'Albert Ier Verdun Isabey'),
(10, '543950401', 'Preville Patton'),
(11, '543950402', 'Santifontaine'),
(12, '543950403', 'A. France Sud Bertin Nord'),
(13, '543950404', 'Foch Commanderie'),
(14, '543950501', 'Croix de Bourgogne Mouilleron'),
(15, '543950502', 'Mon Desert Nord Jeanne d''Arc Est'),
(16, '543950503', 'Mon Desert Sud Jeanne d''Arc Ouest'),
(17, '543950504', 'Prouve Republique Garenne Nord'),
(18, '543950505', 'Rotonde Kennedy Bellange'),
(19, '543950601', 'Vauban Sud Gebhart Turinaz'),
(20, '543950602', 'Vauban Nord Placieux Parc Sainte-Marie'),
(21, '543950603', 'Haussonville'),
(22, '543950604', 'Leclerc Sud Chevert Exelmans'),
(23, '543950701', 'Leclerc Nord Garenne Sud'),
(24, '543950702', 'Leclerc Sud Saurupt Clemenceau'),
(25, '543950703', 'Oudinot Cimetiere du Sud Doumer'),
(26, '543950801', 'Rene Ii Bonsecours La Madeleine'),
(27, '543950802', 'Pichon Place des Vosges Lebrun Nord'),
(28, '543950803', 'Olry Lobau Remenauville'),
(29, '543950804', 'Canal Marne au Rhin Est M. Brot'),
(30, '543950805', 'Lionnois Hopital Central Maternite'),
(31, '543950901', 'Charles Iii Sud Jardiniers'),
(32, '543950902', 'Gambetta Carmes Faiencerie'),
(33, '543950903', 'Saint-Sebastien Cyffle'),
(34, '543950904', 'Charles Iii Nord Tiercelins St-Georges'),
(35, '543950905', 'Centre Gare Marche'),
(36, '543951001', 'Xxe Corps Sud Austrasie Meurthe'),
(37, '543951002', 'Xxe Corps Nord Oberlin Mac-Mahon'),
(38, '543951003', 'Port Sainte-Catherine Le Jardin d''Eau'),
(39, '543951101', 'Cours Leopold'),
(40, '543951102', 'Pepiniere Vieille Ville'),
(41, '543951201', 'Keller Metz Joli Coeur'),
(42, '543951202', 'Citadelle Sellier C. de Foucauld'),
(43, '543951203', 'V. Mauvais Vayringe Crosne'),
(44, '54395ZZZZ', 'Non localisé à l''iris');

-- --------------------------------------------------------

--
-- Structure de la table `family`
--

CREATE TABLE `family` (
  `id` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `family`
--

INSERT INTO `family` (`id`, `description`, `color`) VALUES
(1, 'Parking', NULL),
(2, 'Arrêt de bus', NULL),
(3, 'Grande surface', NULL),
(4, 'Bricolage', NULL),
(5, 'Petit commerce alimentaire', NULL),
(6, 'Librairie', NULL),
(7, 'Habillement et bien être', NULL),
(8, 'Horlogerie Bijouterie', NULL),
(9, 'Fleuriste', NULL),
(10, 'Magasin d''optique', NULL),
(11, 'Equipement du Foyer', NULL),
(12, 'Station service', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `geographical_data`
--

CREATE TABLE `geographical_data` (
  `id` int(11) NOT NULL,
  `longitude` varchar(45) DEFAULT NULL,
  `latitude` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `id_service` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `geographical_data`
--

INSERT INTO `geographical_data` (`id`, `longitude`, `latitude`, `description`, `id_area`, `id_service`) VALUES
(1, '6.160913499999992', '48.6849702', 'Supermarchés Match', NULL, 2),
(2, '6.170085699999959', '48.6894284', 'Petit Casino', NULL, 4),
(3, '6.182103299999994', '48.6945071', 'L''Epicerie du Goût', NULL, 5),
(4, '6.163000499999953', '48.6960295', 'Boulangerie Pâtisserie Seckinger', NULL, 6),
(5, '6.166817499999979', '48.6853999', 'La Place Du Pain', NULL, 6),
(6, '6.172712999999931', '48.6724404', 'Boucherie Charcuterie Grandjean', NULL, 7),
(7, '6.166141000000039', '48.6658402', 'Boucherie du Vélodrome', NULL, 7),
(8, '6.163352300000042', '48.6749878', 'Librairie des Nations', NULL, 10),
(9, '6.1826995000000124', '48.6902767', 'Hall du Livre', NULL, 10),
(10, '6.183334000000059', '48.69092089999999', 'Zara', NULL, 11),
(11, '6.18136800000002', '48.6905821', 'Celio', NULL, 11),
(12, '6.181390700000065', '48.6922466', 'NetLooks Nancy', NULL, 22),
(13, '6.1727798469177', '48.689209752196', 'Saint-Leon', 13, 24),
(14, '6.1735336912475', '48.685856569217', 'Kennedy', 18, 24),
(15, '6.1882267902231', '48.684685238531', 'Place des Vosges', 27, 24),
(16, '6.189404780236', '48.687314989972', 'Saint-Nicolas', 31, 24),
(17, '6.1810281588373', '48.691587648699', 'Dom Calmet', 32, 24),
(18, '6.1844393599568', '48.689243349163', 'Saint-Dizier', 32, 24),
(19, '6.1796100088581', '48.687787336563', 'Joffre St-Thiebaut', 33, 24),
(20, '6.1817369571435', '48.687297487942', 'Saint-Sebastien', 33, 24),
(21, '6.1849443364254', '48.692216863478', 'Place Stanislas', 34, 24),
(22, '6.1789784558211', '48.688695191634', 'Saint-Jean', 35, 24),
(23, '6.1794564225121', '48.686630791568', 'RÃ©publique', 35, 24),
(24, '6.1816790463629', '48.689344306328', 'Charles III', 35, 24),
(25, '6.1757361799075', '48.690088215103', 'Gare Thiers', 35, 24),
(26, '6.1958919376867', '48.695298084823', 'Les Deux Rives', 36, 24),
(27, '6.1707076271278', '48.696988327943', 'Manufacture', 39, 24),
(28, '6.178138107468', '48.693222132685', 'Ville Vielle Carnot', 39, 24),
(29, '6.1762485453638', '48.695384786425', 'Ville Vielle Leopold', 39, 24),
(30, '6.1841811388516', '48.694597473756', 'Vaudemont', 40, 24);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `id_family` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `service`
--

INSERT INTO `service` (`id`, `title`, `id_family`) VALUES
(1, 'Hypermarché', 3),
(2, 'Supermarché', 3),
(3, 'Grande surface de bricolage', 4),
(4, 'Supérette', 5),
(5, 'Epicerie', 5),
(6, 'Boulangerie', 5),
(7, 'Boucherie charcuterie', 5),
(8, 'Produits surgelés', 5),
(9, 'Poissonnerie', 5),
(10, 'Librairie papeterie journaux', 6),
(11, 'Magasin de vêtements', 7),
(12, 'Magasin d''équipements du foyer', 0),
(13, 'Magasin de chaussures', 7),
(14, 'Magasin d''électroménager et de matériel audio', 11),
(15, 'Magasin de meubles', 11),
(16, 'Magasin d''articles de sports et de loisirs', 7),
(17, 'Magasin de revêtements murs et sols', 11),
(18, 'Droguerie quincaillerie bricolage', 4),
(19, 'Parfumerie', 7),
(20, 'Horlogerie Bijouterie', 8),
(21, 'Fleuriste', 9),
(22, 'Magasin d''optique', 10),
(23, 'Station service', 12),
(24, 'Parking', 1);

-- --------------------------------------------------------

--
-- Structure de la table `service_by_area`
--

CREATE TABLE `service_by_area` (
  `id_service` int(11) NOT NULL,
  `id_area` int(11) NOT NULL,
  `number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `service_by_area`
--

INSERT INTO `service_by_area` (`id_service`, `id_area`, `number`) VALUES
(4, 1, 1),
(5, 1, 1),
(6, 1, 2),
(7, 1, 1),
(22, 1, 1),
(10, 2, 1),
(11, 2, 1),
(11, 4, 1),
(5, 5, 1),
(11, 5, 1),
(19, 5, 1),
(6, 6, 1),
(11, 6, 1),
(18, 6, 1),
(21, 6, 1),
(6, 7, 1),
(11, 7, 1),
(19, 7, 1),
(6, 8, 2),
(10, 8, 1),
(5, 9, 1),
(6, 9, 1),
(10, 9, 1),
(14, 9, 1),
(23, 9, 2),
(2, 10, 2),
(11, 10, 1),
(12, 10, 1),
(17, 10, 1),
(18, 10, 1),
(21, 10, 1),
(23, 10, 1),
(6, 11, 1),
(7, 11, 1),
(22, 11, 1),
(2, 12, 1),
(6, 12, 3),
(7, 12, 1),
(8, 12, 1),
(21, 12, 1),
(22, 12, 1),
(4, 13, 2),
(5, 13, 4),
(6, 13, 3),
(7, 13, 3),
(10, 13, 1),
(15, 13, 2),
(19, 13, 1),
(22, 13, 1),
(24, 13, 1),
(2, 14, 2),
(5, 14, 1),
(6, 14, 3),
(11, 14, 1),
(12, 14, 1),
(14, 14, 1),
(15, 14, 1),
(20, 14, 1),
(21, 14, 2),
(6, 15, 1),
(7, 15, 1),
(19, 15, 1),
(20, 15, 1),
(21, 15, 1),
(6, 16, 2),
(11, 16, 1),
(21, 16, 1),
(4, 17, 1),
(5, 17, 1),
(6, 17, 2),
(7, 17, 1),
(18, 17, 1),
(21, 17, 1),
(23, 17, 1),
(24, 18, 1),
(5, 19, 1),
(6, 19, 5),
(7, 19, 5),
(10, 19, 2),
(11, 19, 1),
(22, 19, 1),
(2, 20, 1),
(6, 20, 3),
(7, 20, 1),
(10, 20, 2),
(11, 20, 1),
(16, 20, 2),
(2, 21, 1),
(7, 21, 1),
(11, 21, 1),
(4, 22, 1),
(6, 22, 3),
(15, 22, 2),
(16, 22, 1),
(5, 23, 4),
(6, 23, 2),
(18, 23, 1),
(6, 24, 1),
(3, 25, 1),
(5, 25, 1),
(6, 25, 2),
(20, 25, 1),
(5, 26, 1),
(6, 26, 2),
(21, 26, 1),
(2, 27, 2),
(5, 27, 1),
(6, 27, 2),
(10, 27, 1),
(14, 27, 1),
(24, 27, 1),
(1, 28, 1),
(3, 28, 2),
(7, 28, 1),
(10, 28, 1),
(14, 28, 1),
(15, 28, 1),
(18, 28, 1),
(20, 28, 1),
(22, 28, 1),
(23, 28, 1),
(1, 29, 1),
(2, 29, 2),
(4, 29, 1),
(5, 29, 1),
(7, 29, 1),
(18, 29, 2),
(5, 30, 1),
(10, 30, 1),
(5, 31, 3),
(6, 31, 2),
(15, 31, 2),
(24, 31, 1),
(2, 32, 2),
(3, 32, 1),
(5, 32, 5),
(6, 32, 9),
(7, 32, 2),
(10, 32, 8),
(11, 32, 91),
(12, 32, 7),
(13, 32, 18),
(14, 32, 2),
(15, 32, 2),
(16, 32, 3),
(19, 32, 11),
(20, 32, 11),
(22, 32, 16),
(24, 32, 2),
(1, 33, 1),
(2, 33, 1),
(5, 33, 1),
(6, 33, 2),
(8, 33, 1),
(10, 33, 7),
(11, 33, 57),
(12, 33, 3),
(13, 33, 8),
(14, 33, 2),
(15, 33, 5),
(16, 33, 5),
(19, 33, 10),
(20, 33, 7),
(22, 33, 8),
(24, 33, 2),
(4, 34, 1),
(5, 34, 3),
(6, 34, 8),
(7, 34, 3),
(10, 34, 2),
(11, 34, 25),
(12, 34, 3),
(13, 34, 5),
(15, 34, 4),
(16, 34, 1),
(20, 34, 2),
(21, 34, 3),
(24, 34, 1),
(4, 35, 2),
(5, 35, 4),
(6, 35, 5),
(7, 35, 7),
(9, 35, 1),
(10, 35, 7),
(11, 35, 42),
(12, 35, 4),
(13, 35, 11),
(14, 35, 2),
(15, 35, 1),
(16, 35, 2),
(18, 35, 1),
(19, 35, 6),
(20, 35, 4),
(21, 35, 4),
(22, 35, 3),
(24, 35, 4),
(2, 36, 1),
(6, 36, 5),
(15, 36, 1),
(16, 36, 1),
(19, 36, 1),
(23, 36, 1),
(24, 36, 1),
(3, 37, 1),
(5, 37, 3),
(6, 37, 3),
(12, 37, 1),
(14, 37, 1),
(16, 37, 1),
(4, 38, 1),
(10, 38, 1),
(4, 39, 2),
(5, 39, 3),
(6, 39, 4),
(11, 39, 7),
(13, 39, 2),
(14, 39, 1),
(16, 39, 2),
(21, 39, 1),
(24, 39, 3),
(5, 40, 2),
(6, 40, 4),
(7, 40, 2),
(10, 40, 6),
(11, 40, 3),
(12, 40, 7),
(13, 40, 2),
(14, 40, 1),
(15, 40, 2),
(18, 40, 1),
(20, 40, 2),
(21, 40, 4),
(22, 40, 1),
(24, 40, 1),
(5, 41, 3),
(6, 41, 3),
(8, 41, 1),
(10, 41, 1),
(11, 41, 1),
(22, 41, 1),
(5, 42, 1),
(6, 42, 2),
(7, 42, 1),
(19, 42, 1),
(21, 42, 1),
(22, 42, 1),
(6, 43, 3),
(11, 43, 2),
(16, 43, 1),
(21, 43, 1),
(22, 43, 1),
(23, 44, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Index pour la table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code_iris` (`code`);

--
-- Index pour la table `family`
--
ALTER TABLE `family`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `geographical_data`
--
ALTER TABLE `geographical_data`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `service_by_area`
--
ALTER TABLE `service_by_area`
  ADD PRIMARY KEY (`id_area`,`id_service`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `area`
--
ALTER TABLE `area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT pour la table `family`
--
ALTER TABLE `family`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `geographical_data`
--
ALTER TABLE `geographical_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
