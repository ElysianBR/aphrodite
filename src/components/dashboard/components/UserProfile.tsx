import Account from "@/provider/methods/Account";
import Company from "@/provider/methods/Company";
import { useRouter } from "next/navigation";
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";


function UserProfile() {
    const router = useRouter();
    const [account, setAccount] = React.useState<Account>();
    const [comapany, setCompany] = React.useState<Company>();
    const hasFetched = React.useRef(false);


    const find= async () => {
        let accountOut = await Account.get()
        if (accountOut instanceof Account) {
            setAccount(accountOut);
        }

        let companyOut = await Company.get()
        if (companyOut instanceof Company) {
            setCompany(companyOut);
        }
    }


    React.useEffect(() => {
        if (!hasFetched.current) {
            find()
            hasFetched.current = true;
        }

        return () => {
        }
    }, [])


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Editar Perfil</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Company</label>
                                                <Input
                                                    disabled
                                                    placeholder="Company"
                                                    type="text"
                                                    value={comapany?.companyName}
                                                />
                                            </FormGroup>
                                        </Col>
                                        {/* <Col className="px-md-1" md="3">
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input
                                                    placeholder="Username"
                                                    type="text"
                                                    value={account.companyName}
                                                />
                                            </FormGroup>
                                        </Col> */}
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Input
                                                    placeholder="mike@email.com"
                                                    type="email"
                                                    value={account?.email}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>First Name</label>
                                                <Input
                                                    placeholder="Company"
                                                    type="text"
                                                    value={account?.firstName}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label>Last Name</label>
                                                <Input
                                                    placeholder="Last Name"
                                                    type="text"
                                                    value={account?.lastName}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Address</label>
                                                <Input
                                                    placeholder="Home Address"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>City</label>
                                                <Input
                                                    placeholder="City"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>Country</label>
                                                <Input
                                                    placeholder="Country"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Postal Code</label>
                                                <Input placeholder="ZIP Code" type="number" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="8">
                                            <FormGroup>
                                                <label>About Me</label>
                                                <Input
                                                    cols="80"
                                                    placeholder="Here can be your description"
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color="primary" type="submit">
                                    Save
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar"
                                        // src={require("assets/img/emilyz.jpg")}
                                        />
                                        <h5 className="title">Mike Andrew</h5>
                                    </a>
                                    <p className="description">Ceo/Co-Founder</p>
                                </div>
                                <div className="card-description">
                                    Do not be scared of the truth because we need to restart the
                                    human foundation in truth And I love you like Kanye loves
                                    Kanye I love Rick Owens’ bed design but the back is...
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="button-container">
                                    <Button className="btn-icon btn-round" color="facebook">
                                        <i className="fab fa-facebook" />
                                    </Button>
                                    <Button className="btn-icon btn-round" color="twitter">
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button className="btn-icon btn-round" color="google">
                                        <i className="fab fa-google-plus" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default UserProfile;
