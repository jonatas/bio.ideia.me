(function() {
  window.Tania = {
    nome: "Tânia Elisa Mascarello",
    profissao: "Biológa",
    formacao: "Bacharel em Biologia",
    descricao: "Bióloga, mãe do Lorenzo, apreciadora da natureza.",
    valor_hora_padrao: "60,00",
    contato: {
      email: "biomascarello@gmail.com",
      site: "bio.ideia.me",
      celular: "(46) 9901-1124",
      localizacao: "Francisco Beltrão - PR",
      crbio: "75708/07-D"
    },
    forma_de_trabalho: "Estimar precisamente a data de entrega de um projeto ambiental é uma incerteza, pois no trabalho a campo dependemos da estabilidade do tempo.\n\nSe este colaborar, podemos concluir apenas em algumas semanas, se não podem demorar meses.\n\nDesta forma, acredito ser justo cobrar pelas horas efetivas trabalhadas ao invés de definir um valor fechado para o escopo do projeto.\n\nEste modelo de trabalho também é uma garantia para o contratante pois este tem a oportunidade de acompanhar passo a passo do andamento do projeto.\n\nEntão contratando um pequeno número de horas já é possível experimentar a qualidade do serviço.",
    aptidoes: {
      "Área verde": {
        icon: "tree-deciduous",
        desc: "É um espaço com predomínio de vegetação, que pode ser para preservação da mata existente, serve para aclimatação do ambiente ou pode ser algum tipo de parque para recreação, Jardim botânico ou zoológico.",
        como_posso_ajudar: "Se já existe algum tipo de fragmento florestal, posso ajudar recuperando e deixando-o mais verde ou podemos juntos escolher espécies para formar uma desejada área adaptada para o local."
      },
      "Levantamento fitossociológico das espécies": {
        icon: "flag",
        desc: "Este levantamento visa estruturar o funcionamento e a dinâmica de uma determinada área.\nNeste estudo o espaço é avaliado em parcelas que visam delimitar uma unidade de estudo e dentro desta são avaliadas: \nDensidade, frequência, dominância, posição sociológica, regeneração natural e valor de importância.",
        como_posso_ajudar: "Posso identificar as espécies de uma determinada área para você.\nTambém posso lhe ajudar a entender o ecosistema de determinada espécie, assim como lhe ajudar a escolher as melhores \nestratégias para cada espécie/família/ecosistema.\nUm aspecto importante deste trabalho se dá a relevância em termos da biodinâmica, que, quando aplicado a uma estratégia \ncomo a biofloresta é possível criar o aspecto de compensação e projetar a melhor forma de intercalar as plantas de forma \nque ajude a evitar pragas assim como permita que uma planta projeta a outra ou mesmo compense uma fraqueza do ambiente da planta.",
        preco: 80.00
      },
      "Recuperação de áreas degradadas": {
        icon: "repeat",
        desc: "O objetivo de recuperar uma área e trazer toda  a sua \"função\" de volta, ou seja, fazer com que ela seja capaz de se desenvolver e reproduzir sozinha através de determinadas técnicas. Mas isso não significa que ela ira voltar exatamente igual ao estado anterior tudo irá depender do estado da degradação e da forma com que ela será recuperada.",
        reference: {
          message: "Impacto ambiental é qualquer alteração das propriedades físicas, químicas e biológicas do meio ambiente, causada por qualquer forma de matéria ou energia resultante das atividades humanas que, direta ou indiretamente afetam:\n\n  I.   a saúde, a segurança e o bem-estar da população;\n  II.  as atividades sociais e econômicas;\n  III. a biota;\n  IV.  as condições estéticas e sanitárias do meio ambiente;\n  V.   a qualidade dos recursos ambientais.",
          source: "Resolução Conama de 1986",
          link: {
            url: "http://www.matanativa.com.br/br/blog-do-inventario-florestal/entry/o-que-e-eia-rima-estudo-e-relatorio-de-impacto-ambiental",
            title: "veja mais sobre EIA e RIMA."
          }
        },
        como_posso_ajudar: "Depois de um levantamento da situação da área degradada podemos definir que tipo de trabalho e técnica iremos utilizar,\nbem como o tempo de recuperação e para que fim a área vai ser recuperada."
      },
      "Escolha das espécies para revitalização": {
        icon: "search",
        desc: "A escolha de uma determinada espécie pode interferir muito no ambiente em que vai ser plantada tanto no lado positivo quando no negativo. Vai depender muito na forma que ela vai ser \"usada\", se é para sombra, corredor ecológico, arborização urbana ou para jardinagem. "
      },
      "Agrofloresta": {
        icon: "tree-conifer",
        desc: " A agrofloresta é o manejo que integra a agricultura, a floresta e o ser humano. As plantas agrícolas convivem com as florestais num caminho rumo à complexidade, com qualidade e quantidade de vida consolidada com todas as inter-relações possíveis.",
        reference: {
          message: "A estratégia do planeta Terra é a Vida!\n\nA agrofloresta é uma tentativa de harmonizar as atividades da agricultura com os processos naturais da vida existentes em cada lugar em que atuamos. Representa grande potencial para as regiões tropicais, naturalmente ricas em biodiversidade, por proteger os solos das intensas chuvas e da insolação direta.",
          link: {
            url: "http://www.fazendasaoluiz.com/",
            title: "Fazenda São Luiz"
          }
        }
      },
      "Horta orgânica": {
        icon: "leaf",
        desc: "Horta Orgânica: você pode ter a sua horta orgânica no quintal de casa ou então pra quem mora em apartamento na sua própria sacada, com vasos de diferentes tamanhos e várias espécies de hortaliças, chás, temperos e o que quiser ter é só dedicar-se e ter paciência para seguir todos os passos."
      },
      "Arborização Urbana": {
        icon: "cloud",
        desc: "Arborização são elementos vegetais arbóreos dentro de uma cidade que auxiliam na limpeza e frescor do ar, sombra nas calçadas, embelezam e diminuem as ilhas de calor causadas em grandes centros pelo numero de veículos e edificações e podem atuar como atrativos e microambientes para pássaros e pequenos animais.",
        como_posso_ajudar: "Auxiliando na escolha das espécies a serem plantadas nas calçadas, parques, canteiros de avenidas, estacionamentos, passeios e canteiros de esquinas. Tipos de podas e forma de plantio."
      },
      "Reciclagem": {
        icon: "refresh",
        desc: "Reciclagem: Pensamos logo nos 3 Rs  Reduzir, Reutilizar e Reciclar mas como e aonde?; Na sua casa, na sua empresa ou no seu trabalho. Reduzindo a quantidade de lixo produzida, reutilizando folhas de papel em branco e outros materiais que são descartados sem tem necessidade e dando novas definições e utilidade a materiais que possam ser reutilizados, como potes, vidro e aquelas latinhas de leite em pó que usamos uma por semana podem se tornar lindos objetos dentro de casa e muito funcionais."
      },
      "Educação Ambiental": {
        icon: "book",
        desc: "Educação Ambiental deveria ser matéria obrigatória nas escolas, mas enquanto isso não acontece nós fazemos essa parte de ensinar e reeducar não só as crianças, mas para todo mundo o que é importante para o nosso meio.",
        reference: {
          message: "A educação ambiental é um processo de reconhecimento de valores e clarificações de conceitos, objetivando o desenvolvimento das habilidades e modificando as atitudes em relação ao meio, para entender e apreciar as inter-relações entre os seres humanos, suas culturas e seus meios biofísicos. A educação ambiental também está relacionada com a prática das tomadas de decisões e a ética que conduzem para a melhora da qualidade de vida",
          source: "Conferência Intergovernamental de Tbilisi (1977)"
        }
      }
    }
  };

}).call(this);
