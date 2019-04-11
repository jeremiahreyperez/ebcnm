import React from "react"
import MapImage from "./imageComponents/mapImage"

const VisitSection = () => {
  return (
    <div
      id="visit"
      style={{
        backgroundColor: `#ddd`,
      }}
    >
      <div
        style={{
          padding: `2.5rem 0`,
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <h2
          style={{
            textAlign: `center`,
            padding: `1.5rem 0`,
          }}
        >
          Visit us!
        </h2>
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: "30% 70%",
            gridTemplateRows: `auto auto`,
            gridGap: `1rem`,
            marginBottom: `2rem`,
          }}
        >
          <div
            style={{
              gridArea: `1 / 1 / 2 /2`,
            }}
          >
            <h3>Service Times:</h3>
            <ul
              style={{
                listStyle: `none`,
                padding: `10px 0`,
              }}
            >
              <li>10AM Sunday - Sunday School</li>
              <li>11AM Sunday - Morning Service</li>
              <li>5PM Sunday - Evening Service</li>
              <li>6PM Wednesday - Prayer Meeting</li>
            </ul>
          </div>
          <div
            style={{
              gridArea: `2 / 1 / 3 /2`,
            }}
          >
            <h3>How to get there:</h3>
            <p
              style={{
                padding: `10px 0`,
              }}
            >
              On Google Maps, Emmanuel Baptist Church is located at 213 Boardman
              Ave, Gallup, NM 87301, but the physical location of the church is
              further along Boardman Ave than listed on Google Maps.
            </p>
            <p>See the map to find the actual location on Google Maps.</p>
          </div>
          <div
            style={{
              height: `100%`,
              gridArea: `1 / 2/ 3 / 3`,
              border: `solid 2px #aaa`,
            }}
          >
            <MapImage />
          </div>
        </div>
        <div
          style={{
            textAlign: `center`,
            marginTop: `3rem`,
          }}
        >
          <h3
            style={{
              padding: `1.5rem 0`,
            }}
          >
            Contact Emmanuel Baptist Church
          </h3>
          <ul
            style={{
              listStyle: `none`,
            }}
          >
            <li style={{ marginBottom: `.5rem` }}>ebcgnm@yahoo.com</li>
            <li style={{ marginBottom: `.5rem` }}>(505) 722-7312</li>
            <li style={{ marginBottom: `.5rem` }}>
              {" "}
              213 Boardman Ave, Gallup, NM 37301
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisitSection
