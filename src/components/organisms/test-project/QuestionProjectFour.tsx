import { useState } from 'react'

function QuestionProjectFour() {
  const [valueFourProject, setValueFourProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-four-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueFourProject) * -1}%,
            #fd8e3e ${parseInt(valueFourProject)}%
          );
          width: ${parseInt(valueFourProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">4. ¿Es importante que la persona que este en tu equipo tenga una alta adaptabilidad?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueFourProject}
              onChange={({ target: { value: radius } }) => {
                setValueFourProject(radius)
              }}
            />
            <div className="progress-bar-four-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueFourProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectFour
