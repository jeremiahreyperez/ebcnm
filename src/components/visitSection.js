import React from "react"
import MapImage from "./mapImage"

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
            <h3>Meeting Times -</h3>
            <h4 style={{ margin: `4px 0` }}>Sundays:</h4>
            <ul>
              <li>10:00 AM - Sunday School for Kids and Adults</li>
              <li>11:00 AM - Morning Service</li>
              <li>6:00 PM - Evening Service</li>
            </ul>
            <h4 style={{ margin: `4px 0` }}>Wednesdays</h4>
            <ul>
              <li>7:00 PM - Bible Study / Prayer</li>
            </ul>
          </div>
          <div
            style={{
              gridArea: `2 / 1 / 3 /2`,
            }}
          >
            <h3>Meeting Place -</h3>
            <p
              style={{
                padding: `10px 0`,
              }}
            >
              213 State Road 564 (known as Boardman Drive) We are located in
              McKinley County and just outside of the Gallup City limits. We are
              about 2 miles from the intersection of Boardman and Highway 66.
              Travel south from Highway 66 until you come to the church property
              on the south side of the highway!
            </p>
            <p style={{ fontStyle: `italic` }}>
              Transportation to regular services is available.
            </p>
          </div>
          <div
            style={{
              maxWidth: `768px`,
              gridArea: `1 / 2/ 3 / 3`,
              // border: `solid 2px #aaa`,
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
