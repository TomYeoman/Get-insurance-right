import React from 'react';
import styles from './HomeTiles.css';

/* Common Components */
import ShadowContainer from '../../../common/ShadowContainer';

/* Page Specific */
import CoverTile from '../CoverTile';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`${styles.coverTileContainer} ptop col-xs-12`}>
        <div className="col-xs-8 col-xs-offset-2">
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Life Insurance"
                imgsrc="images/icon_lifeinsurance.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Critical Illness"
                imgsrc="images/icon_illness.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Over 50's Insurance"
                imgsrc="images/icon_over50s.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Income Protection"
                imgsrc="images/icon_incomeprotection.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Buildings & Contents"
                imgsrc="images/icon_buildingcontent.png"
              />
            </ShadowContainer>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ShadowContainer>
              <CoverTile
                title="Landlord Insurance"
                imgsrc="images/icon_landlord.png"
              />
            </ShadowContainer>
        </div>
        
        </div>
      </div>

    )
  }
}
