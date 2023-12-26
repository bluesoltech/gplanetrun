import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form(props) {
  // for checked boxes only
  const [isRequired, setIsRequired] = useState(true);
  // const [isValid, setIsValid] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [tshirt, setTshirt] = useState("");
  const [category1, setCategory1] = useState(false);
  const [category2, setCategory2] = useState(false);
  const [addresses, setAddresses] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [ephone, setEphone] = useState("");
  const [ename, setEname] = useState("");
  const [erelation, setErelation] = useState("");

  const user = {
    valid: true,
    firstName: fname,
    lastName: lname,
    email: email,
    phone: phone,
    dob: selectedDate,
    gender: gender,
    bloodGroup: bgroup,
    size: tshirt,
    category1: category1,
    category2: category2,
    address: addresses,
    city: city,
    state: province,
    pin: zip,
    ePhone: ephone,
    eName: ename,
    eRelation: erelation,
    transactionId: "",
  };

  const handleCheckboxChange = () => {
    setIsRequired(!isRequired);
  };

  const handleCheckbox1ClickChange = () => {
    setCategory1(!category1);
  };
  const handleCheckbox2ClickChange = () => {
    setCategory2(!category2);
  };

  const handleFNameChange = (e) => {
    e.preventDefault();
    setFname(e.target.value);
  };
  const handleLNameChange = (e) => {
    e.preventDefault();
    setLname(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // setIsValid(!isValid);

    // console.log(user);

    props.onSubmitForm(user);
  }

  return (
    <form className="p-10" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  required
                  onChange={handleFNameChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  onChange={handleLNameChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  autoComplete="phone"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  maxLength="10"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="dob"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Birth
              </label>
              <div className="mt-2">
                <DatePicker
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  maxDate={new Date()}
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                />
              </div>
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Gender
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    required
                    onClick={() => setGender("Male")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="male"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    required
                    onClick={() => setGender("Female")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="female"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Female
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="sm:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>India</option>
                </select>
              </div>
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Blood Group
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="A-positive"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("A+")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="A-positive"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    A+
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="A-neg"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("A-")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="A-neg"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    A-
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="B-positive"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("B+")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="B-positive"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    B+
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="B-neg"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("B-")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="B-neg"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    B-
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="O-positive"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("O+")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="O-positive"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    O+
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="O-neg"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("O-")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="O-neg"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    O-
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="AB-positive"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("AB+")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="AB-positive"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    AB+
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="A-neg"
                    name="bgroup"
                    type="radio"
                    required
                    onClick={() => setBgroup("AB-")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="AB-neg"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    AB-
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                T-shirt size
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="s"
                    name="tshirt"
                    type="radio"
                    required
                    onClick={() => setTshirt("S")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="s"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    S
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="m"
                    name="tshirt"
                    type="radio"
                    required
                    onClick={() => setTshirt("M")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="m"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    M
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="l"
                    name="tshirt"
                    type="radio"
                    required
                    onClick={() => setTshirt("L")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="l"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    L
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="xl"
                    name="tshirt"
                    type="radio"
                    required
                    onClick={() => setTshirt("XL")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="xl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    XL
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="2xl"
                    name="tshirt"
                    type="radio"
                    required
                    onClick={() => setTshirt("2XL")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="2xl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    2XL
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset className="sm:col-span-2">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Category
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3 required">
                  <input
                    id="5"
                    name="category"
                    required={isRequired}
                    onChange={handleCheckboxChange}
                    onClick={handleCheckbox1ClickChange}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="male"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    5 KM
                  </label>
                </div>
                <div className="flex items-center gap-x-3 required">
                  <input
                    id="10"
                    name="category"
                    required={isRequired}
                    onChange={handleCheckboxChange}
                    onClick={handleCheckbox2ClickChange}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="female"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    10 KM
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  required
                  onChange={(e) => setAddresses(e.target.value)}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  onChange={(e) => setCity(e.target.value)}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  required
                  onChange={(e) => setProvince(e.target.value)}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  required
                  onChange={(e) => setZip(e.target.value)}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Ephone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Emergency Phone number
              </label>
              <div className="mt-2">
                <input
                  id="Ephone"
                  name="Ephone"
                  type="text"
                  autoComplete="phone"
                  required
                  onChange={(e) => setEphone(e.target.value)}
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  maxlength="10"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="e-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Emergency name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="e-name"
                  id="e-name"
                  required
                  onChange={(e) => setEname(e.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="relation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Relation with Emergency contact
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="relation"
                  id="relation"
                  required
                  onChange={(e) => setErelation(e.target.value)}
                  autoComplete="relation-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="reset"
          className="text-sm font-semibold leading-6 text-gray-900"
          // onClick={(e) => e.target.reset()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
