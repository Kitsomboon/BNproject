function mapp() {
  return (
    <div className="w-full h-96">
      <iframe
        title="Company Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.78467192395465!2d98.99918665065952!3d18.919112837901704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1739431991659!5m2!1sth!2sth"
      ></iframe>
    </div>
  );
}

export default mapp;
