import type { Struct, Schema } from '@strapi/strapi';

export interface ProfileLinkProfileLink extends Struct.ComponentSchema {
  collectionName: 'components_profile_link_profile_link_s';
  info: {
    displayName: 'ProfileLink ';
    icon: 'code';
  };
  attributes: {
    network: Schema.Attribute.String & Schema.Attribute.Required;
    username: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'Location';
    icon: 'earth';
  };
  attributes: {
    addres: Schema.Attribute.String & Schema.Attribute.Required;
    postalCode: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    city: Schema.Attribute.String;
    countryCode: Schema.Attribute.String & Schema.Attribute.Required;
    region: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'profile-link.profile-link': ProfileLinkProfileLink;
      'location.location': LocationLocation;
    }
  }
}
