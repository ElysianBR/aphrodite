import Account from "@/provider/requests/Account";
import Company from "@/provider/requests/Company";
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

// Account Profile Styles
import "@/components/dashboard/styles/black-dashboard-react.css";

function UserProfile() {
    const router = useRouter();
    const [account, setAccount] = React.useState<Account>();
    const hasFetched = React.useRef(false);


    const find = async () => {
        let accountOut = await Account.get()
        if (accountOut instanceof Account) {
            setAccount(accountOut);
        }
    }


    const handleSave = async () => {
        if (account != undefined) {
            let accountOut = await Account.put(account)
            if (accountOut instanceof Account) {
                setAccount(accountOut);
            }
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccount((prevAccount) => {
            if (prevAccount) {
                return {
                    ...prevAccount,
                    [name]: value,
                };
            }
            return prevAccount;
        });
    };


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
            <div className="content" style={{ marginTop: '10%' }}>
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
                                                <label>Primeiro Nome</label>
                                                <Input
                                                    placeholder="Primeiro Nome"
                                                    type="text"
                                                    name="firstName"
                                                    value={account?.firstName}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="6">
                                            <FormGroup>
                                                <label>Sobrenome</label>
                                                <Input
                                                    placeholder="Sobrenome"
                                                    type="text"
                                                    name="lastName"
                                                    value={account?.lastName}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email
                                                </label>
                                                <Input
                                                    placeholder="account@email.com"
                                                    type="email"
                                                    name="email"
                                                    value={account?.email}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="6">
                                            <FormGroup>
                                                <label>Endereço</label>
                                                <Input
                                                    placeholder="Endereço"
                                                    type="text"
                                                    name="address"
                                                    value={account?.address}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>Cidade</label>
                                                <Input
                                                    placeholder="Cidade"
                                                    type="text"
                                                    name="city"
                                                    value={account?.city}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <label>Estado</label>
                                                <Input
                                                    placeholder="Estado"
                                                    type="text"
                                                    name="state"
                                                    value={account?.state}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>País</label>
                                                <Input
                                                    placeholder="País"
                                                    type="text"
                                                    name="country"
                                                    value={account?.country}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {/* <Row>
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
                                    </Row> */}
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" color="primary" type="submit" onClick={handleSave}>
                                    Salvar
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
                                    <a onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="profile picture"
                                            src={account?.profilePic}
                                            className="avatar"
                                            style={{ "borderRadius": "50%", "width": 200, "height": 200, "objectFit": "cover" }}
                                        // src={require("assets/img/emilyz.jpg")}
                                        />
                                        <h5 className="title">{`${account?.firstName} ${account?.lastName}`}</h5>
                                    </a>
                                    {/* <p className="description">Ceo/Co-Founder</p> */}
                                </div>
                                {/* <div className="card-description">
                                    Do not be scared of the truth because we need to restart the
                                    human foundation in truth And I love you like Kanye loves
                                    Kanye I love Rick Owens’ bed design but the back is...
                                </div>  */}
                            </CardBody>
                            {/* <CardFooter>
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
                            </CardFooter> */}
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default UserProfile;
