import { Sequelize } from "../../config/sequelize.js";
import { DataTypes, Model } from "sequelize";

export  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    
    title: {type: DataTypes.STRING,
      allowNull: false,
    },
    author:{type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {type: DataTypes.STRING,
      allowNull: false,
    },
  },
   {
    sequelize,
    modelName: 'Book',
  });
  