CREATE TABLE `secretboard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `text` longtext,
  `password` tinytext,
  PRIMARY KEY (`id`)
)
