import React from 'react';
import styles from './HomeTiles.css';

/* Common Components */
import ShadowContainer from '../../../common/ShadowContainer';

/* Page Specific */
import Tile from './Tile';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.coverTileContainer} ptop col-xs-12`}>
        <div className="row-no-padding">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Life Insurance"
                  imgsrc="images/icon_lifeinsurance.png"
                  route="LifeInsurance"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Critical Illness"
                  imgsrc="images/icon_illness.png"
                  route="CriticalIllness"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Over 50's Insurance"
                  imgsrc="images/icon_over50s.png"
                  route="Over50s"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Income Protection"
                  imgsrc="images/icon_incomeprotection.png"
                  route="IncomeProtection"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Why Choose Simply"
                  imgsrc="images/questionmark.png"
                  route="About"
                />
              </ShadowContainer>
            </div>
            <div className="clearfix col-xs-6 col-sm-6 col-md-4">
              <ShadowContainer>
                <Tile
                  title="Get In Touch"
                  imgsrc="images/phonelogo.png"
                  route="ContactUs"
                />
              </ShadowContainer>
            </div>
        </div>

        </div>
      </div>

    )
  }
}
