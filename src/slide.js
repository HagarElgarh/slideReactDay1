import { Component } from "react";

class Slideimages extends Component {
  constructor() {
    super();
    this.index = 0;
    this.image = [
      "image/erw.jpg",
      "image/mika.jpg",
      "image/re.jpg",
      "image/sas.jpg",
      "image/sq.png",
    ];
    this.state = {
      src: this.image[this.index],
    };
  }

  render() {
    const styles = {
      img: {
        width: "200px",
        height: "200px",
      },
    };
    return (
      <div>
        <img src={this.state.src} style={styles.img}></img>
        <div>
          <input
            type="button"
            value="Previous"
            onClick={() => {
              if (this.index == 0) {
                this.index = this.image.length;
              }
              this.setState({
                index: this.index--,
                src: this.image[this.index],
              });
            }}
          ></input>

          <input
            type="button"
            value="SlideShow"
            onClick={() => {
              setInterval(() => {
                if (this.index == this.image.length - 1) {
                  this.index = -1;
                }
                this.setState({
                  index: this.index++,
                  src: this.image[this.index],
                });
              }, 2000);
            }}
          ></input>

          <input
            type="button"
            value="Next"
            onClick={() => {
              if (this.index == this.image.length - 1) {
                this.index = -1;
              }
              this.setState({
                index: this.index++,
                src: this.image[this.index],
              });
              console.log(this.index);
            }}
          ></input>
        </div>
      </div>
    );
  }
}

export default Slideimages;
