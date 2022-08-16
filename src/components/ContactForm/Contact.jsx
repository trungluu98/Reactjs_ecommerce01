import React from 'react'
import { Component } from 'react';
import { toast } from "react-toastify";
import './style.css'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }
  handleChane = event => {
    const targe = event.targe;
    const value = targe.type === "check-box" ? targe.checked : targe.value;
    const name = targe.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, phone, message } = this.state;
    const newPhone = phone ? phone : null;
    const newMessage = message ? message : null;
    if (!name || !email) {
      return toast.error('Error!')
    }
    const newContact = {
      name,
      email,
      phone: newPhone,
      message: newMessage
    };
    const res = await ("contacts", "Post", newContact, null);
    if (res && res.status === 100) {
      toast.success("Sending contact is successfully")
      this.setState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  }
  render() {
    const { name, email, phone, message } = this.state;
    return (
      <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">Contact Us</h3>
                <p className="contact-page-message mb-25">
                  Cần Tư vấn Ánh Sáng, Cần thợ sửa điện - Cần Mua Hàng - Hãy liên hệ với chúng tôi ngay
                </p>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-fax" /> Address
                  </h4>
                  <p>121-123-125, Hàm Nghi, Phường Nguyễn Thái Bình, Q. 1, Tp. Hồ Chí Minh </p>
                </div>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-phone" /> Phone
                  </h4>
                  <p>Mobile: (+84) 123 456 789</p>
                  <p>Hotline: 1900585817</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4>
                    <i className="fa fa-envelope-o" /> Email
                  </h4>
                  <p>homecare@dienquang.com</p>
                  <p>support.homecare@dienquang.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content pt-sm-55 pt-xs-55">
                <h3 className="contact-page-title">Tell Us Your Message</h3>
                <div className="contact-form">
                  <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="form-group">
                      <label>
                        Your Name <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Your Email <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        onChange={this.handleChange}
                        type="number"
                        name="Phone"
                        value={phone}
                      />
                    </div>
                    <div className="form-group mb-30">
                      <label>Your Message</label>
                      <textarea
                        onChange={this.handleChange}
                        name="message"
                        value={message}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        value="submit"
                        className="li-btn-3"
                        name="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <p className="form-messege" />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

