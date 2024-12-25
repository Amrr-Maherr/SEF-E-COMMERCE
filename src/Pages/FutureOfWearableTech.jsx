import React from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate


function FutureOfWearableTech() {
  const navigate = useNavigate(); // تهيئة useNavigate

  // دالة لتوجيه المستخدم إلى صفحة المنتجات
  const goToProductsPage = () => {
    navigate("/products"); // وجه المستخدم إلى صفحة /products
  };

  return (
    <>
      <div className="container hero">
        <h2 className="text-center mb-4 fw-bold text-dark display-4">
          The Future of Wearable Tech
        </h2>
        <div className="card shadow-lg border-0 p-4 bg-light rounded">
          <div className="card-body">
            <p className="text-muted mb-4">January 5, 2024</p>
            <p>
              Wearable technology has come a long way in recent years, and it
              continues to evolve rapidly. From fitness trackers to
              smartwatches, the ability to wear technology on our bodies has
              opened up new possibilities for convenience, health, and
              entertainment. But what does the future hold for wearable tech?
              Let’s dive into some of the key trends and innovations that are
              shaping the future of wearables.
            </p>

            <h5 className="mt-4 text-primary">
              1. Health and Fitness Monitoring{" "}
              <i className="fas fa-heartbeat text-danger"></i>{" "}
              {/* أيقونة من Font Awesome */}
            </h5>
            <p>
              Wearable tech has already made a huge impact in the health and
              fitness industry. Smartwatches and fitness trackers allow users to
              monitor their heart rate, step count, sleep patterns, and even
              blood oxygen levels. In the future, we can expect these devices to
              offer even more advanced health monitoring features, such as
              glucose monitoring for diabetics, continuous blood pressure
              tracking, and real-time ECG readings.
            </p>

            <h5 className="mt-4 text-primary">
              2. Augmented Reality (AR) Glasses{" "}
              <i className="fas fa-glasses text-danger"></i>{" "}
              {/* أيقونة من Font Awesome */}
            </h5>
            <p>
              One of the most exciting developments in wearable tech is
              augmented reality. AR glasses, like the Microsoft HoloLens and the
              rumored Apple AR glasses, will bring a new level of interaction
              with the world around us. These glasses will superimpose digital
              information onto the real world, enabling users to interact with
              virtual objects in a physical space. In the future, AR glasses
              could replace smartphones for many tasks, from navigation to
              entertainment.
            </p>

            <h5 className="mt-4 text-primary">
              3. Smart Clothing <i className="fas fa-tshirt text-danger"></i>{" "}
              {/* أيقونة من Font Awesome */}
            </h5>
            <p>
              Imagine a world where your clothes can monitor your health, adjust
              to different temperatures, and even charge your devices. Smart
              clothing is a rapidly growing field, and we’re seeing garments
              equipped with sensors and conductive fabrics that can track your
              movement, heart rate, and more. Future smart clothing may also
              have built-in heating and cooling systems, allowing users to
              regulate their body temperature without external devices.
            </p>

            <h5 className="mt-4 text-primary">
              4. Brain-Computer Interfaces{" "}
              <i className="fas fa-brain text-danger"></i>{" "}
              {/* أيقونة من Font Awesome */}
            </h5>
            <p>
              One of the most futuristic concepts in wearable technology is the
              brain-computer interface (BCI). BCIs enable users to control
              devices and machines directly with their thoughts, bypassing
              traditional input methods like keyboards and touchscreens. While
              we are still in the early stages, BCIs could revolutionize
              industries such as healthcare, where patients with mobility
              impairments could control prosthetics or wheelchairs with their
              minds.
            </p>

            <h5 className="mt-4 text-primary">
              5. Enhanced Personalization{" "}
              <i className="fas fa-user-cog text-danger"></i>{" "}
              {/* أيقونة من Font Awesome */}
            </h5>
            <p>
              As wearable tech becomes more integrated into our lives, it will
              also become more personalized. Devices will use artificial
              intelligence (AI) to understand our habits, preferences, and
              health data, providing tailored recommendations and experiences.
              For example, a smartwatch may suggest workouts based on your
              activity history, or a fitness tracker could offer diet tips based
              on your nutritional needs.
            </p>

            <h5 className="mt-4 text-primary">
              6. The Internet of Things (IoT){" "}
              <i className="fas fa-network-wired text-danger"></i>{" "}
              {/* أيقونة من Font Awesome */}
            </h5>
            <p>
              Wearable devices will become more connected to the broader
              Internet of Things (IoT) ecosystem, allowing them to interact with
              other smart devices in your home or workplace. For example, your
              smartwatch could unlock your front door when you approach, or your
              fitness tracker could automatically adjust the temperature of your
              home based on your workout schedule.
            </p>

            <h5 className="mt-4 text-primary">
              7. Privacy and Security Challenges{" "}
              <i className="fas fa-shield-alt text-danger"></i>{" "}
              {/* أيقونة من Font Awesome */}
            </h5>
            <p>
              As wearables collect more personal data, privacy and security will
              become increasingly important concerns. Manufacturers will need to
              implement stronger encryption and data protection measures to
              prevent unauthorized access to users’ sensitive information.
              Additionally, the ethical implications of constantly tracking and
              monitoring individuals will need to be addressed.
            </p>

            {/* الزرار مع الأيقونة */}
            <button
              className="btn btn-primary mt-4"
              onClick={goToProductsPage} // توجيه المستخدم إلى صفحة المنتجات
            >
              <i className="fas fa-box"></i> Go to Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FutureOfWearableTech;
