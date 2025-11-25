import { Col, Card } from 'react-bootstrap';
import { Component } from 'react'



class OneBook extends Component {


    render() {
        return (
            <Col>
                <Card className={`h-100 my-2 ${this.props.selectedBook?.asin === this.props.book.asin ? "border border-3 border-danger" : "border-info"}`}>
                    <Card.Img
                        variant="top"
                        src={this.props.book.img}
                        className="h-75 w-100"
                        onClick={() => this.props.handleBookSelect(this.props.book)
                        }
                    />
                    <Card.Body className="d-flex flex-column justify-content-around ">
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>
                            {this.props.book.category}

                        </Card.Text>
                        <div className="d-flex justify-content-between flex-wrap align-baseline">
                            <strong className="text-success">€ {this.props.book.price}</strong>
                        </div>
                    </Card.Body>


                </Card>
            </Col>
        )
    }




}

export default OneBook;