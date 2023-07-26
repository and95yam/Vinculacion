/* DATOS DEPENDENCIA */


INSERT INTO smaconvenios.Dependencia (strnombredependencia,strtipodependencia) VALUES
                        ('FADE','Academica'),
                        ('CIENCIAS','Academica'),
                        ('PECUARIAS','Academica'),
                        ('MECANICA','Academica'),
                        ('RECURSOS NAT','Academica'),
                        ('SALUD PUBLICA','Academica'),
						('Rectorado','Administrativa'),
						('Vicerectorado','Administrativa'),
						('Dtic','Administrativa'),
						('Vinculacion','Administrativa'),
						('Biblioteca','Administrativa')


/*INGRESO CONVENIO */ 
/* TABLA DOCENTE Y CONVENIO*/


INSERT INTO smaconvenios.Coordinador(
	strci_cordinador, intid_dependencia, strnombrescoordinador, strcorreo, strtelefono)
	VALUES ('0600000000',4,'Jose Pazmiño G','jose.pazmiño@espoch.edu.ec','0999999999'),
		   ('0600000001',7,'Rector','rector@espoch.edu.ec','0900000001'),
		   ('0600000002',1,'Nelly Chávez','nelly.chavez@espoch.edu.ec','0900000002'),
		   ('0600000003',3,'René Carvajal','rene.carvajal@espoch.edu.ec','0900000003'),
		   ('0600000004',7,'Romero Rodriguez','romero.rodriguez@espoch.edu.ec','0900000004'),
		   ('0600000005',2,'Fernando Cazco','fernando.cazco@espoch.edu.ec','0900000005'),
		   ('0600000006',2,'Jenny Orbe','jenny.orbe@espoch.edu.ec','0900000006'),
		   ('0600000007',6,'Ana Garcia Barba','ana.barba@espoch.edu.ec','0900000007'),
		   ('0600000008',1,'Victor Betancourth','victor.betancourt@espoch.edu.ec','0900000008'),
		   ('0600000009',5,'Norma Erazo','norma.erazo@espoch.edu.ec','0900000009'),
		   ('0600000010',5,'Carlos Cajas','carlos.cajas@espoch.edu.ec','0900000010'),
		   ('0600000011',6,'Angel Parreño','angel.parreño@espoch.edu.ec','0900000010'),
		   ('0600000012',2,'Rubén Pazmiño','ruben.pazmiño@espoch.edu.ec','0900000012'),
		   ('0600000013',3,'Wilfrido Capelo','wilfrido.capelo@espoch.edu.ec','0900000013'),
		   ('0600000014',4,'Fernando Proaño','fernando.proaño@espoch.edu.ec','0900000014'),
		   ('0600000015',5,'Ximena Idrobo','ximena.idrobo@espoch.edu.ec','0900000015'),
		   ('0600000016',6,'Paulina Robalino','paulina.robalino@espoch.edu.ec','0900000016'),
		   ('0600000017',5,'Franklin Arcos','franklin.arcos@espoch.edu.ec','0900000017'),
		   ('0600000018',3,'Rodrigo Proaño','rodrigo.proaño@espoch.edu.ec','0900000018'),
		   ('0600000019',5,'Eduardo Muñoz','eduardo.muñoz@espoch.edu.ec','0900000019')


/* INGRESO TABLA CONVENIO */


						
INSERT INTO smaconvenios.Convenio(
	strid_resolucion, strci_cordinador, strtitulo, strdependencia, strnaturaleza, strclasificacion, strinstitucion, strobjeto, dtfechainicio, dtfechafin, fltavance, strrazon,strarchivo)
	VALUES ('099.CP.2012','0600000001', 'CONVENIO MARCO DE COLABORACIÓN INTERUNIVERSITARIO ENTRE LA ESPOCH A TRAVÉS DE LA FACULTAD DE CIENCIAS PECUARIAS-RIOBAMBA ECUADOR Y EL INSTITUTO DE CIENCIA ANIMAL "ICA" DE LA HABANA-CUBA ', 'Rectorado', 'Internacional', 'Marco', 'INSTITUTO DE CIENCIA ANIMAL "ICA" DE LA HABANA-CUBA', 'La ESPOCH y el ICA se comprometen a fomentar el intercambio de experiencias en los campos de la docencia la investigación y la cultura en general  dentro de aquellas áreas  en las cuales ambas  tengan interés manifiesto especialmente todo lo relacionado con el sector agropecuario', '2012-05-03', '2017-05-03', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('104.CP.2012','0600000002', 'CONVENIO DE COOPERACIÓN INTERINSTITUCIONAL  ENTRE EL GOBIERNO AUTÓNOMO PROVINCIAL DE MORONA SANTIAGO Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO ', 'SEDE MORONA', 'Nacional', 'Marco', 'GOBIERNO AUTÓNOMO PROVINCIAL DE MORONA SANTIAGO', 'La cooperación institucional  para facilitar e incentivar la cooperación , el intercambio técnico y de experiencia , la formación académica y la realización de proyectos de investigación en aquellas áreas que se consideren de interés común ', '2011-12-09', '2014-12-09', 0, 'cuatrimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('114.CP.2012','0600000003', 'CONVENIO DE PASANTÍAS ESTUDIANTILES ENTRE EL INSTITUTO TECNOLÓGICO AGROPECUARIO FISCOMISIONAL CALA SANZ Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO (ESPOCH)  A TRAVÉS DE LA FACULTAD DE CIENCIAS PECUARIAS - ESTACIÓN EXPERIMENTAL TUTSI', 'PECUARIAS', 'Nacional', 'Específico','INSTITUTO TECNOLÓGICO AGROPECUARIO FISCOMISIONAL CALA SANZ', 'La colaboración entre las entidades  a  la que representa para el desarrollo de un programa formativo instructivo de capacitación y pasantías dirigido a los alumno de tercer año de bachillerato  del Instituto Tecnológico Agropecuario Fiscomisional Calasanz', '2012-03-05', '2013-03-05', 0, 'semestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('119.CP.2012','0600000004', 'CONVENIO DE COOPERACIÓN INTERINSTITUCIONAL ACADÉMICO Y CULTURAL  ENTRE LA CASA UNIVERSITARIA  FRANCO MEXICANA   UNIVERSIDAD DE TOULOUSE  Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO Y LA UNIVERSIDAD INTERAMERICANA DEL ECUADOR', 'Rectorado', 'Internacional', 'Marco', ' CASA UNIVERSITARIA  FRANCO MEXICANA   UNIVERSIDAD DE TOULOUSE ', 'La colaboración a largo plazo en los campos de la investigación y docencia  que son compatibles con la orientación de cada institución y que son relevantes a las necesidades e interés  científicos industriales, sociales, culturales de los países', '2012-01-10', '2017-01-10', 0, 'semestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('160.CP.2012','0600000005', 'CONVENIO MARCO DE COOPERACIÓN INTERINSTITUCIONAL ENTRE EL CONSORCIO DE GOBIERNOS AUTÓNOMOS PROVINCIALES DEL ECUADOR Y LA ESCUELA SUPERIOR  POLITÉCNICA DE CHIMBORAZO', 'CIENCIAS', 'Nacional', 'Marco', 'CONSORCIO DE GOBIERNOS AUTÓNOMOS PROVINCIALES DEL ECUADOR ', 'Es establecer una alianza estratégica en la perspectiva de generar apoyo mutuo en iniciativas para el fortalecimiento del ámbito de fomento productivo ', '2012-08-31', '2012-11-30', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('196.CP.2012','0600000006', 'CONVENIO ESPECÍFICO DE COLABORACIÓN ENTE LA FACULTAD DE INGENIERÍA DE LA UNIVERSIDAD NACIONAL DE MAR DE PLATA Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO', 'CIENCIAS', 'Internacional', 'Específico', 'UNIVERSIDAD NACIONAL DE MAR DE PLATA', 'Realizar proyectos de investigación en conjunto visitas de profesores e investigadores por estancias menores a dos meses a fin de dictar cursos de postgrado ', '2012-05-18', '2015-06-27', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('231.CP.2012','0600000007', 'CONVENIO MARCO DE COOPERACIÓN INTERINSTITUCIONAL ENTRE EL MINISTERIO  DE SALUD PÚBLICA DEL ECUADOR Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO PARA DESARROLLAR LA CAPACIDAD  DE GESTIÓN INSTITUCIONAL EN EL MINISTERIO DE SALUD PÚBLICA DEL ECUADOR', 'SALUD PUBLICA', 'Nacional', 'Marco', 'MINISTERIO  DE SALUD PÚBLICA DEL ECUADOR', 'Fortalecer la capacidad  de gestión institucional en el personal del ministerio  en rectoría - gestión y prestación de servicios de salud', '2012-08-01', '2017-08-01',0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('234.CP.2012','0600000008', 'CONVENIO DE COOPERACIÓN ACADÉMICA ENTRE LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO Y EL MINISTERIO DE INCLUSIÓN ECONÓMICA Y SOCIAL-DIRECCIÓN PROVINCIAL DE CHIMBORAZO MIES','FADE', 'Nacional', 'Específico', 'MINISTERIO DE INCLUSIÓN ECONÓMICA Y SOCIAL-DIRECCIÓN PROVINCIAL DE CHIMBORAZO MIES', 'La participación de estudiantes de niveles terminales de la escuela de Ingeniería en Marketing e Ingeniería Comercial de la ESPOCH, para el desarrollo de sus prácticas pre profesionales en el Ministerio de Inclusión Económica y Social - Dirección Provincial de Chimborazo,  a fin de que sean quienes  organicen promocionen ejecuten y evalúen', '2012-11-08', '2014-11-08', 0, 'semestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('259.CP.2012','0600000019', 'CONVENIO MARCO DE COOPERACIÓN  INTERINSTITUCIONAL ENTRE LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO Y LA CENTRAL ECUATORIANA DE SERVICIOS AGRÍCOLAS ', 'RECURSOS NAT', 'Nacional', 'Marco', 'CENTRAL ECUATORIANA DE SERVICIOS AGRÍCOLAS', 'Generar una alianza a fin de implementar programas proyectos  y acciones conjuntas en beneficio  del desarrollo de las poblaciones donde CESA y la ESPOCH  tienen su común área  de influencia en la provincia de Chimborazo y el país ', '2012-06-19', '2017-06-19', 0, 'cuatrimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('284.CP.2012','0600000009', 'CONVENIO DE COOPERACIÓN INTERINSTITUCIONAL ENTRE LA DIRECCIÓN PROVINCIAL DEL MINISTERIO DEL AMBIENTE Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO', 'RECURSOS NAT', 'Nacional', 'Especifico', 'DIRECCIÓN PROVINCIAL DEL MINISTERIO DEL AMBIENTE ', 'Comprometer la participación de estudiantes de niveles terminales de la facultad de recursos naturales a fin de creer vienes realicen sus prácticas pre profesionales de la parte técnica de su especialización', '2012-06-27', '2014-06-27', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
           ('286.CP.2012','0600000010', 'CONVENIO DE COOPERACIÓN INTERINSTITUCIONAL ENTRE LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO  Y EL GOBIERNO AUTÓNOMO DESCENTRALIZADO DEL CANTÓN GONZALO PIZARRO', 'RECURSOS NAT', 'Nacional', 'Específico', '', 'Establecer una relación  de cooperación institucional que ayude a instaurar acuerdos específicos para llevar a cabo la organización y desarrollo de acciones de apoyo mutuo en el campo técnico- científico , investigativo y capacitación , contribuyan al desarrollo  y los fines de cada institución ', '2012-06-27', '2015-06-27', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
   	       ('287.CP.2012','0600000011', 'CONVENIO DE COOPERACION INTERISNTITUCIONAL ENTRE LA ESCUELA SUPERIOR POLITECNICA DE CHIMBORAZO Y LA UNIVERSIDAD ESTATAL DE BOLÍVAR', 'SALUD PUBLICA', 'Nacional', 'Especifico', 'UNIVERSIDAD ESTATAL DE BOLÍVAR', 'Abrir un espacio de cooperación académica  que permita a  las dos instituciones complementarse en al planificación y concreción de  proyectos y actividades indispensables  de las funciones universitarias de docencia ', '2012-11-27', '2017-11-27', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('299.CP.2012','0600000012', 'CONVENIO MARCO DE COOPERACIÓN INTERNACIONAL ENTRE LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO DE RIOBAMBA, ECUADOR Y LA UNIVERSIDAD DE SEVILLA ESPAÑA ', 'CIENCIAS', 'Internacional', 'Marco', 'UNIVERSIDAD DE SEVILLA ESPAÑA', 'Organizar y desarrollar proyectos y actividades de interés  para ambas instituciones en el ámbito académico en actividades de soporte científico y tecnológico y de colaboración en temas específicos ', '2012-06-27', '2017-06-27', 0, 'semestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
           ('396.CP.2012','0600000013', 'CONVENIO DE COOPERACIÓN ENTRE LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO Y LA COMUNA PUNGAL GRANDE  DEL CANTÓN GUANO ', 'PECUARIAS', 'Nacional', 'Específico', 'COMUNA PUNGAL GRANDE  DEL CANTÓN GUANO', 'Es que la escuela de Ingeniería Zootécnica de la ESPOCH a través del programa de pastos y borrajes y manejo de praderas y la Escuela de Ingeniería Mecánica  con el área de diseño se comprometen a desarrollar programas de investigación asistencia técnica  y capacitación en la zona de Pungal  Grande, de la Parroquia Matriz, cantón Guano provincia de Chimborazo, que agrupa 300 familias dedicadas al cultivo de alfalfa para la producción y procesamiento de semilla ', '2012-09-14', '2017-09-14', 0, 'semestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('418.CP.2012','0600000014', 'CONVENIO MARCO DE COOPERACIÓN  ENTRE LA UNIVERSIDAD NACIONAL DE COLOMBIA Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO  ', 'IPEC', 'Internacional', 'Marco', 'UNIVERSIDAD NACIONAL DE COLOMBIA', 'Aunar esfuerzos  para adelantar acciones conjuntas en temas de interés  reciproco para cada una de las partes  en las áreas de formación , investigación , extensión, asistencia técnica , administrativa y académica  y en todas las formas de acción universitaria ', '2012-06-25', '2016-06-25', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('446.CP.2012','0600000010', 'CONVENIO DE COOPERACIÓN  ACADÉMICA ENTRE LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO Y LA ORGANIZACIÓN COMUNITARIA KURARAY LIKINO A TRAVÉS DEL CENTRO DE TURISMO COMUNITARIO ISHKAY YAKU ', 'RECURSOS NAT', 'Nacional', 'Específico', 'CENTRO DE TURISMO COMUNITARIO ISHKAY YAKU', 'Impulsar programas conjuntos de investigación capacitación y extensión en las áreas de influencia de las dos instituciones , con el propósito de generar propuestas de desarrollo  comunitario y contribuí a la gestión sostenibles del patrimonio natural y cultural , y a la generación de un espacio de reflexión sobre la interculturalidad y el desarrollo sustentable mediante la participación de docentes y egresados que elaboren sus tesis de grado, estudiante que realicen sus giras de  observación y prácticas pre profesionales mediante un proceso de selección en función de las necesidades institucionales ', '2012-10-29', '2014-10-29', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('447.CP.2012','0600000003', 'CONVENIO DE PRÁCTICAS ESTUDIANTILES ENTRE EL COLEGIO TÉCNICO AGROPECUARIO  FAUSTO VALLEJO ESCOBAR  Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO ESPOCH A TRAVÉS DE LA  FACULTAD DE CIENCIAS PECUARIAS - ESTACIÓN EXPERIMENTAL TUNSHI ', 'Pecuarias', 'Nacional', 'Especifico', 'COLEGIO TÉCNICO AGROPECUARIO  FAUSTO VALLEJO ESCOBAR ', 'La colaboración entre las entidades  a las que representan para el desarrollo de un programa formativo instructivo de capacitación y prácticas dirigido a los alumnos del tercer año de bachillerato del colegio técnico agropecuario fausto vallejo escobar', '2012-10-29', '2013-10-29', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('535.CP.2012','0600000015', 'CONVENIO MARCO DE COOPERACIÓN INTERINSTITUCIONAL ENTRE EL INSTITUTO  SUPERIOR DE DISEÑO-CUBA Y LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO-ECUADOR', 'FIE', 'Internacional', 'Marco', 'INSTITUTO  SUPERIOR DE DISEÑO-CUBA ', 'Promover el desarrollo y difusión  de la cultura y en particular el desarrollo de la enseñanza superior la formación y capacitación  de profesionales así como la investigación  científica y tecnológica', '2012-10-23', '2017-10-23', 0, 'cuatrimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('537.CP.2012','0600000014', 'CONVENIO DE COOPERACIÓN TECNICS INTERNACIONAL ENTRE  LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO ESCUELA DE POSTGRADO Y EDUCACIÓN CONTINUA Y WORLDTEACH CON BASE EN CAMBRIDGE MASSACHUSETTS, USA. ', 'IPEC', 'Internacional', 'Específico', 'WORLDTEACH CON BASE EN CAMBRIDGE MASSACHUSETTS, USA.', 'Establecer un marco en el que  se desarrolle  el programa de cooperación  técnica internacional  de enseñanza del idioma  determinar el ámbito de competencias  atribuidas a cada uno de los  organismos ejecutores .', '2012-09-13', '2013-09-13', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
           ('538.CP.2012','0600000016', 'CONVENIO  DE COOPERACIÓN INTERINSTITUCIONAL ENTRE LA ESCUELA SUPERIOR  POLITÉCNICA DE CHIMBORAZO  Y LA UNIVERSIDAD ESTATAL DE BOLÍVAR ', 'SALUD PUBLICA', 'Nacional', 'Marco', 'UNIVERSIDAD ESTATAL DE BOLÍVAR', 'Abrir un espacio de cooperación  académica que permita a las dos instituciones complementarse en la planificación  y concreción  de proyectos , programas  y actividades indispensables  de las funciones universitarias  de docencia investigación y vinculación con la colectividad  respetando mutuamente su espacio jurisdiccional   o interactuando en el común acuerdo  y de manera formalizada para a futuro suscribir Convenios de Cooperación  Específicos   en sus áreas de acción ', '2012-11-27', '2014-11-27', 0, 'semestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('539.CP.2012','0600000017', 'to', 'RECURSOS NAT', 'Nacional', 'Especifico', 'to', 'Fomentar el desarrollo de las comunidades  pertenecientes al Gobierno Autónomo Descentralizado Parroquial rural de San Isidro de Patulú  en bases a la participación de estudiantes de niveles terminales  de las distintas facultades  de la ESPOCH para  realización de sus prácticas pre-profesionales y/o tesis  de grado a través de la investigación y vinculación con las comunidades del sector ', '2012-05-03', '2017-05-03', 0, 'trimestral','http://sample.info/?insect=fireman&porter=attraction#cave'),
	       ('541.CP.2012','0600000018', 'CONVENIO DE COOPERACIÓN INTERINSTITUCIONAL Y ASISTENCIA TÉCNICA   ENTRE EL GOBIERNO AUTÓNOMO DESCENTRALIZADO  PARROQUIAL RURAL DE SAN ISIDRO DE PATULÚ  Y LA FACULTAD DE CIENCIAS PECUARIAS DE LA ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO ', 'PECUARIAS', 'Nacional', 'Especifico', 'GOBIERNO AUTÓNOMO DESCENTRALIZADO  PARROQUIAL RURAL DE SAN ISIDRO DE PATULÚ ', 'Integrar acciones   de cooperación estratégica  e intercambio de  experiencias  socio productivas  orientadas  a  la capacitación  técnica pecuaria de las organizaciones de base  que conforman el GAD   de San Isidro de Patulú del cantón Guano y la Facultad de Ciencias Pecuarias de la ESPOCH ', '2012-09-30', '2015-09-30', 0, 'cuatrimestral','http://sample.info/?insect=fireman&porter=attraction#cave')

	

/*INIGRESO TABLA EJES*/

INSERT INTO smaconvenios.Ejes(
	strid_resolucion, blnacademico, blninvestigacion, blnpracticas, blnvinculacion)
	VALUES  ('099.CP.2012', true, true, true, true),
			('104.CP.2012', false, true, false, false),
			('114.CP.2012', true, false, true, true),
			('119.CP.2012', true, true, true, true),
			('160.CP.2012', false,false,false, true),
			('196.CP.2012', true, true, true, true),
			('231.CP.2012', false, false, false, true),
			('234.CP.2012', false, false, true, false),
			('259.CP.2012', false, false, false, true),
			('284.CP.2012', false, false, true, false),
			('286.CP.2012', false, true, true, true),
			('287.CP.2012', true, false, false, false),
			('299.CP.2012', true, true, true, true),
			('396.CP.2012', false, true, false, true),
			('418.CP.2012', true , true, true, true),
			('446.CP.2012', false, false, true, false),
			('447.CP.2012', false, false, true, false),
			('535.CP.2012', true, true, true, true),
			('537.CP.2012', true, true, true, true),
			('538.CP.2012', false, true, false, true),
			('539.CP.2012', false, false, true, false),
			('541.CP.2012', false, false, false, true)

/*Ingreso PLanificacion*/


			