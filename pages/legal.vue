<template>
  <div id="legal">
    <div class="legal">
      <div class="wrap">
        <div>
          <h1>
            Mentions légales
          </h1>
          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site legalstart.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
          <h2>
            &Eacute;dition & réalisation
          </h2>
          <p>
            Le site fightforsub.com est édité & réalisé principalement par DA SILVA AVELAR William domicilié au 81, rue du Faubourg Saint-Nicolas, Meaux 77100. Du fait de sa réalisation open-source, tous les contributeurs sont listés à cette adresse: <a href="https://github.com/WilliamDASILVA/fightforsub/graphs/contributors">https://github.com/WilliamDASILVA/fightforsub/graphs/contributors</a>
          </p>
          <h2>
            Hébergeur
          </h2>
          <p>
            Le site fightforsub.com est hébergé par la société Heroku Inc., 650 7th Street, San Francisco, CA (tel : +33 1 (877) 563-4311).
            Le domaine fightforsub.com est enregistré par la société 1&1 Internet SARL, 7, place de la Gare, BP 70109, 57201 Sarreguemines Cedex.
          </p>
          <h2>
            Contacter
          </h2>
          <ul>
            <li>
              Par email: william.da.silva[at]outlook.com
            </li>
            <li>
              Par Twitter: <a href="https://www.twitter.com/willia_am">willia_am</a>
            </li>
          </ul>
          <h2>
            CNIL
          </h2>
          <p>
            La collecte et le traitement informatique des données nominatives par le site fightforsub.com n'a pas fait l'objet d'une déclaration simplifiée auprès de l'autorité française de protection des données personnelles (la Commission Nationale de l'Informatique et des Libertés - CNIL) pour le moment.
          </p>
          <p>
            Vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à: william.da.silva[at]outlook.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'legal',
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/style.scss';

  .legal{
    color: white;

    h1, h2{
      font-family: 'BigNoodle', 'Roboto', sans-serif;
      font-style: italic;
    }

    h1{
      font-size: 42pt;
      color: $green;
    }

    h2{
      font-size: 24pt;
    }

    p{
      font-weight: 300;
    }

    a{
      color: $green;
    }
  }
</style>
