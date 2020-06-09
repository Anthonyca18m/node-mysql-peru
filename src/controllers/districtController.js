const sequelize = require("../Config/database");
const { QueryTypes } = require("sequelize");
const District = require("../models/districts");
const Provinces = require("../models/provinces");
const Departments = require("../models/departments");
const districtController = {};

districtController.getAll = async (req, res) => {
  const data = await District.findAll({
    // where : ,
    // include: [ ---- ]
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });

  res.json({
    status: 200,
    data,
  });
};

districtController.get = async (req, res) => {
  const data = await District.findAll({
    where: { id_districts: req.params.id },
    // include: [ ---- ]
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });

  res.json({
    status: 200,
    data,
  });
};

districtController.create = async (req, res) => {
  const { id_districts, d_name, provinces_id } = req.body;
  const data = await District.create({
    id_provinces,
    p_name,
    provinces_id,
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });

  res.json({
    status: 200,
    data,
  });
};

districtController.edit = async (req, res) => {
  const { id } = req.params;

  const data = await District.update(req.body, {
    where: { id_districts: id },
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });

  res.json({
    status: 200,
    data,
  });
};

districtController.delete = async (req, res) => {
  const { id } = req.params;

  const data = await District.destroy({
    where: { id_districts: id },
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });

  res.json({
    status: 200,
    data,
  });
};

districtController.getDistricts = async (req, res) => {
  const data = await District.findAll({
    where: {
      provinces_id: req.params.id,
    },
    include: [
      {
        model: Provinces,
        as: "Provinces",
      },
    ],
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e;
    });

  res.json({
    status: 200,
    data,
  });
};

districtController.getDistrictsAll = async (req, res) => {
  const data = await sequelize
    .query(
      "SELECT Districts.id_districts, Districts.d_name, Districts.provinces_id, Provinces.p_name,Departments.id_departments, Departments.d_name AS d_name_deparment FROM Districts AS Districts LEFT OUTER JOIN Provinces AS Provinces ON Districts.provinces_id = Provinces.id_provinces LEFT OUTER JOIN Departments AS Departments ON Provinces.departments_id = Departments.id_departments WHERE Districts.id_districts = :id_districts",
      {
        replacements: { id_districts: req.params.id },
        type: QueryTypes.SELECT,
      }
    )
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.message;
    });

  res.json({
    status: 200,
    data,
  });
};
/*
const { QueryTypes } = require('sequelize');

await sequelize.query(
  'SELECT * FROM projects WHERE status IN(:status)',
  {
    replacements: { status: ['active', 'inactive'] },
    type: QueryTypes.SELECT
  }
);
*/
module.exports = districtController;
