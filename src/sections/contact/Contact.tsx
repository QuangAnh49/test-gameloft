import './contact.scss';
import decorator from '../../assets/decorator.svg';
import { variants } from '../../constants';
import { animate, motion } from 'framer-motion';

function Contact() {
  return (
    <div className="contact wrapper">
      <div className="contact-container ">
        <motion.div
          variants={variants}
          initial={variants.hidden}
          transition={variants.transition}
          whileInView={'visible'}
          className="contact-decorator"
        >
          <img src={decorator} alt="decorator" />
        </motion.div>

        <motion.form
          variants={variants}
          initial={variants.hidden}
          whileInView={'visible'}
          transition={variants.transition}
          form
          className="contact-form"
          action="submit"
        >
          <div className="form-title">
            <h1>Stay in the Know!</h1>
            <p>Don't get left behind</p>
          </div>
          <div className="form-inputs">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <select name="country" id="country">
              <option value="vietnam">Viet Nam</option>
              <option value="england">England</option>
              <option value="china">China</option>
              <option value="sing">Sing</option>
            </select>
            <select name="platform" id="platform">
              <option value="vietnam">Viet Nam</option>
              <option value="england">England</option>
              <option value="china">China</option>
              <option value="sing">Sing</option>
            </select>
            <div className="check-item">
              <input type="checkbox" id="checkbox1" name="checkbox1" value="checkbox1" />
              <label htmlFor="checkbox1">
                By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions
                and I have read the Privacy Policy.
              </label>
            </div>
            <div className="check-item">
              <input type="checkbox" id="checkbox2" name="checkbox2" value="checkbox2" />
              <label htmlFor="checkbox2">
                I agree to receive promotional offers relating to all Gameloft games and services.
              </label>
            </div>
            <button>Button</button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
